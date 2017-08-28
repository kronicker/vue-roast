// Load modules

import ToastContainer from './Container.vue';

// Declare internals

const internals = {
  cache: []
};

internals.setDefaults = function(config = {}) {
  const { ttl } = config || 5000;
  const { threshold } = config || 3;
  Object.assign(internals, { ttl, threshold });
};

internals.id = function(exclude) {
  const id = Math.ceil(Date.now() * Math.random());
  if (exclude.includes(id)) {
    return internals.id(exclude);
  }

  return id;
};

internals.Timer = class {
  constructor(ttl = internals.ttl, action = Function.prototype) {
    this.ttl = ttl;
    this.action = action;
  }
  start(ttl = this.ttl) {
    this.timer = setTimeout(this.action, ttl);
  }
  stop() {
    clearTimeout(this.timer);
  }
  restart(ttl = this.ttl) {
    this.stop();
    this.start(ttl);
  }
};

/**
 * @param {Object} message - toast message
 * @param {Object} options - toast options
 * @param {number} options.ttl - time to live in milliseconds
 * @param {number} options.truncateAfter - max message char length to display
 * @param {string} options.action.placeholder - toast click action placeholder
 * @param {Function} options.action.method - method to be invoked on click
 * @returns {undefined}
 */
internals.toast = function(message, options = {}) {
  if (internals.threshold && internals.cache.length === internals.threshold) {
    internals.cache.shift();
  }

  const toast = {
    message,
    options,
    id: internals.id(internals.cache.map(el => el.id))
  };
  toast.timer = new internals.Timer(options.ttl);
  internals.cache.push(toast);
};

// Define exports

export default {
  install(Vue, config) {
    internals.setDefaults(config);

    const Container = Vue.extend(ToastContainer);
    const container = new Container({ propsData: { toasts: internals.cache } }).$mount();

    document.body.appendChild(container.$el);

    Vue.toast = internals.toast;
    Vue.prototype.$toast = internals.toast;
  }
};
