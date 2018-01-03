<template>
  <section class="toast-container" :class="position">
    <transition-group :name="transition">
      <toast-message v-for="{ id, message, timer, options } in toasts"
        :key="id"
        :id="id"
        :options="options"
        :timer="timer"
        v-bind="message"
        @close="close">
      </toast-message>
    </transition-group>
  </section>
</template>

<style lang="scss">
  @import '../style/positions';
  @import '../style/transitions';

  .toast-container {
    position: fixed;
    padding: 0 15px;
    min-width: 200px;
    max-width: 380px;
    z-index: 99999;
  }
</style>


<script>
  import ToastMessage from './Message.vue';

  export default {
    props: {
      position: { type: String, required: true },
      transition: { type: String, required: true },
      toasts: { type: Array, default() { return []; } }
    },
    methods: {
      close(id) {
        const index = this.toasts.findIndex(el => el.id === id);
        this.toasts.splice(index, 1);
      }
    },
    components: { ToastMessage }
  };
</script>
