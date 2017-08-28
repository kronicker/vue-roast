# vue-roast
The plugin for easy display of toast messages.

## Install

## Usage
### Register plugin
```js
import VueRoast from 'vue-roast';

Vue.use(VueRoast, options);
```

### API
In component:
```js
this.$toast(toast);
```

Outside of component
```js
Vue.toast(toast);
```
