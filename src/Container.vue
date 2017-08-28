<template>
  <section class="toast-container">
    <transition-group name="slide-fade">
      <toast-message v-for="toast in toasts"
        :id="toast.id"
        :message="toast.message"
        :options="toast.options"
        :timer="toast.timer"
        :key="toast.id"
        @close="close">
      </toast-message>
    </transition-group>
  </section>
</template>


<style lang="scss" scoped>
  @import "~styles/constants";

  .toast-container {
    position: fixed;
    bottom: 15px;
    left: 0;
    padding: 0 15px;
    width: 100%;
    max-width: 380px;
    z-index: $overlay-z;
  }
</style>


<script>
  import ToastMessage from './Message.vue';

  export default {
    props: { toasts: Array },
    methods: {
      close(id) {
        const index = this.toasts.findIndex((el) => el.id === id);
        this.toasts.splice(index, 1);
      }
    },
    components: { ToastMessage }
  };
</script>
