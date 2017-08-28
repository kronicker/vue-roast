// Load modules

import Vue from 'vue';
import ToastContainer from './Container.vue';


// Declare internals

const internals = {};

internals.toastCache = [];

internals.uniqueId = 0;

internals.getUniqueId = function() {
  internals.uniqueId += 1;
  return internals.uniqueId;
};

internals.toast = function(toast) {
  toast.id = internals.getUniqueId();

  if (internals.toastCache.length === 4) {
    internals.toastCache.shift();
  }
  internals.toastCache.push(toast);

  setTimeout(() => internals.toastCache.shift(), 4000);
};


// Define exports

exports.install = function() {
  const ContainerConstructor = Vue.extend(ToastContainer);
  const container = new ContainerConstructor({
    propsData: {
      toasts: internals.toastCache
    }
  })
  .$mount();
  document.body.appendChild(container.$el);

  Vue.toast = internals.toast;
  Vue.prototype.$toast = internals.toast;
};
