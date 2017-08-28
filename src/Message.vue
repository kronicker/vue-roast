<template>
  <section class="toast-message"
    :class="message.level"
    @mouseenter="timer.stop()"
    @mouseleave="timer.restart(timer.ttl/2)"
    role="alert">
    <div class="toast-header">
      <h4 class="upper">{{ message.title }}</h4>
      <i @click="close" class="icon-close" role="button" :aria-label="'common/close' | msg"></i>
    </div>
    <div class="toast-body">
      <p>
        <span>{{ content }}</span>
        <span v-if="options.action"
          @click="options.action.method"
          class="nd-link alt"
          role="button">
          {{ options.action.placeholder }}
        </span>
      </p>
    </div>
    <div class="toast-footer">
      <p class="smaller">
        <span class="lowercase">{{ 'common/from' | msg }} {{ message.creator.displayName }}</span>
        <span class="pipe">|</span>
        <span>{{ message.createdAt}}</span>
      </p>
    </div>
  </section>
</template>


<style lang="scss">
  .toast-message {
    position: relative;
    margin-bottom: 10px;
    padding: 0 10px;
    background-color: white;
    border: 1px solid #e3e3e3;
    border-left: 5px solid #f58989;
    color: #adadad;

    .toast-header {
      color: #f9fafb;
      margin-top: 15px;

      i {
        position: absolute;
        right: 0;
        top: 0;
        padding: 3px;
      }
    }

    .pipe {
      margin: 0 5px;
    }

    &.error {
      background-color: #f2dede;
      border-left-color: #ebccd1;
      color: #a94442;

      .toast-header {
        color: #a94442;
      }
    }

    &.warning {
      background-color: #fcf8e3;
      border-left-color: #faebcc;
      color: #8a6d3b;

      .toast-header {
        color: #8a6d3b;
      }
    }
  }
</style>


<script>
  import truncate from 'lodash.truncate';

  export default {
    props: {
      id: Number,
      message: {
        title: String,
        content: String,
        creator: String,
        level: String,
        createdAt: Date
      },
      options: {
        action: {
          placeholder: String,
          method: Function
        },
        truncateAfter: Number
      },
      timer: Object
    },
    computed: {
      content() {
        let content = this.message.content;
        const maxLength = this.options.truncateAfter;

        if (content.length > maxLength) {
          content = truncate(content, { length: maxLength });
        }

        return content;
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
