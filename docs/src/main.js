import 'wingcss';

import App from './App.vue';
import Vue from 'vue';
import VueRoast from '../../src';

Vue.use(VueRoast);

new Vue({ // eslint-disable-line no-new
  el: '#demo',
  render: h => h(App)
});
