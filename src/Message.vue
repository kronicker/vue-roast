<template>
  <section class="toast-message"
    :class="[ message.level, group ]"
    @mouseenter="timer.stop()"
    @mouseleave="timer.restart(timer.ttl/2)"
    role="alert">
    <div class="toast-header">
      <h4 class="upper">{{ message.title.key | dissectMsg }}</h4>
      <i @click="close" class="icon-close" role="button" :aria-label="'common/close' | msg"></i>
    </div>
    <div class="toast-body">
      <p>
        <span @click="interceptLink($event)" v-html="content"></span>
        <span v-if="options.action"
          @click="options.action.method"
          class="nd-link alt"
          role="button">
          {{ options.action.placeholder.key | dissectMsg(options.action.placeholder.args) }}
        </span>
      </p>
    </div>
    <div class="toast-footer">
      <p class="smaller">
        <span class="lowercase">{{ 'common/from' | msg }} {{ message.creator.displayName | dissectMsg }}</span>
        <span class="pipe">|</span>
        <span>{{ message.createdAt | date('medium') }}</span>
        <span class="pipe">|</span>
        <span>@{{ message.createdAt | time('short') }}</span>
      </p>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @import "~styles/constants";

  .toast-message {
    position: relative;
    margin-bottom: 10px;
    padding: 0 10px;
    background-color: white;
    border: $normal-border;
    border-left: 5px solid $main-accent-color;
    color: $light-txt-color;

    .toast-header {
      color: $lighter-txt-color;
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

    &.cr { border-left-color: #008080 }
    &.ev { border-left-color: #fff000 }
    &.ar { border-left-color: #0000ff }
    &.th { border-left-color: #008000 }

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
  import truncate from 'lodash/truncate';

  import GoogleAuthorizeWindow from 'common/GoogleAuthorizeWindow';
  import Group from 'share/Group';

  export default {
    props: {
      id: Number,
      message: {
        title: Object,
        content: Object,
        creator: Object,
        level: String,
        group: String,
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
    data() {
      return {
        htmlRegex: /<[a-z][\s\S]*>/i
      };
    },
    computed: {
      group() {
        return this.message.group || Group.OTHER;
      },
      content() {
        const maxLength = this.options.truncateAfter;
        let content = this.$options.filters.dissectMsg(this.message.content.key, this.message.content.args);
        if (this.htmlRegex.test(content)) {
          return content;
        }

        if (content.length > maxLength) {
          content = truncate(content, { length: maxLength });
        }

        return content;
      }
    },
    methods: {
      interceptLink(event) {
        GoogleAuthorizeWindow.linkInterceptor(event);
      },
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
