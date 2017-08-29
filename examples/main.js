import Vue from 'vue';
import VueRoast from '../src';

import Demo from './Demo.vue';

Vue.use(VueRoast);

new Vue({ // eslint-disable-line no-new
  el: '#demo',
  render: h => h(Demo)
});
