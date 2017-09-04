import Vue from 'vue';
import VueRoast from '../';

import App from './App.vue';
import 'wingcss';

Vue.use(VueRoast);

new Vue({ // eslint-disable-line no-new
  el: '#demo',
  render: h => h(App)
});
