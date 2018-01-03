<template>
  <section
    :class="level"
    @mouseenter="timer.stop()"
    @mouseleave="timer.restart(timer.ttl/2)"
    class="toast-message"
    role="alert">
    <div class="toast-header">
      <span class="title bigger">{{ title }}</span>
      <span @click="close" class="close-btn smaller" role="button">&#10006;</span>
    </div>
    <div class="toast-body">
      <span>{{ content }}</span>
      <span v-if="options.action"
        @click="options.action.method"
        role="button">
        {{ options.action.placeholder }}
      </span>
    </div>
    <div class="toast-footer">
      <span class="smaller">{{ footer }}</span>
    </div>
  </section>
</template>

<style lang="scss">
@import '../style/message';
</style>


<script>
export default {
  props: {
    id: { type: Number, required: true },
    title: { type: String, default: '' },
    body: { type: String, default: '' },
    footer: { type: String, default: '' },
    level: { type: String, required: true },
    options: {
      action: {
        placeholder: String,
        method: Function
      },
      truncateAfter: { type: Number, required: false }
    },
    timer: { type: Object, required: true }
  },
  computed: {
    content() {
      const { truncateAfter } = this.options;
      return truncateAfter ? this.body : this.body.substr(0, truncateAfter);
    }
  },
  methods: {
    close() {
      this.$emit('close', this.id);
    }
  },
  mounted() {
    this.timer.action = this.close;
    this.timer.start();
  }
};
</script>
