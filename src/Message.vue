<template>
  <section>
    <div class="toast-message" role="alert">
      <div class="toast-header">
        <h3 class="upper">{{ title }}</h3>
        <i @click="close" class="icon-close" role="button" :aria-label="'Common/close' | msg"></i>
      </div>
      <div class="toast-body">
        <p class="truncate">{{ body }}</p>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @import "~styles/constants";

  .toast-message {
    position: relative;
    margin-bottom: 10px;
    max-height: 60px;
    overflow-y: hidden;
    padding: 10px;
    background-color: $bg-color;
    color: $lighter-txt-color;
    border: $normal-border;
    border-left: 5px solid $main-accent-color;

    .toast-header {
      i {
        position: absolute;
        right: 0;
        top: 0;
        padding: 3px;
      }
    }

    .toast-body p {
      margin-top: 3px;
    }
  }
</style>


<script>
  export default {
    props: {
      title: {
        type: String
      },
      body: {
        type: String
      }
    },
    methods: {
      close() {
        this.$emit('close', this.toast);
      }
    }
  }
</script>
