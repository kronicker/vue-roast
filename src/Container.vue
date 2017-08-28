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
  // Slide fade transition
  .slide-fade-enter-active {
    transition: transform .75s;
  }

  .slide-fade-leave-active {
    transition: transform .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-100%);
  }

  .toast-container {
    position: fixed;
    bottom: 15px;
    left: 0;
    padding: 0 15px;
    width: 100%;
    max-width: 380px;
    z-index: 999;
  }
</style>


<script>
  import ToastMessage from './Message.vue';

  export default {
    props: { toasts: Array },
    methods: {
      close(id) {
        const index = this.toasts.findIndex(el => el.id === id);
        this.toasts.splice(index, 1);
      }
    },
    components: { ToastMessage }
  };
</script>
