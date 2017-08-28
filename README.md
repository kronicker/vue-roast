# vue-roast
=========

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

## Tests

`npm test`

## Contributing

Please follow selected coding style guide.
Add unit tests for any new or changed functionality.
Lint and test your code.
