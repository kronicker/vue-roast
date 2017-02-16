<template>
  <section class="toast-container">
    <transition-group name="slide-fade">
      <toast-message v-for="toast in toasts" :title="toast.title" :body="toast.body" :key="toast.id" @close="close"></toast-message>
    </transition-group>
  </section>
</template>


<style lang="scss" scoped>
  @import "~styles/constants";
  @import "~styles/mixins";

  .toast-container {
    position: fixed;
    bottom: 15px;
    left: 15px;
    width: 100%;
    max-width: 280px;
    z-index: $big-z;

    .slide-fade-enter-active {
      @include transition(transform .8s ease);
    }

    .slide-fade-leave-active {
      @include transition(transform .3s cubic-bezier(1.0, 0.5, 0.8, 1.0));
    }

    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateX(-100%);
    }
  }
</style>


<script>
import ToastMessage from './Message.vue';

export default {
  props: ['toasts'],
  methods: {
    close(toast) {
      this.toasts.splice(this.toasts.indexOf(toast), 1);
    }
  },
  components: {
    ToastMessage
  }
}
</script>
