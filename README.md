<p align="center"><a href="https://vue-roast.surge.sh" target="_blank"><img width="350"src="https://raw.githubusercontent.com/kronicker/vue-roast/master/demo/logo.png"></a></p>

<p align="center">Vue.js plugin for easy display of toast messages.</p>

## [Demo](https://vue-roast.surge.sh)

## Install

### Via npm
`npm i vue-roast`
### Register plugin
```js
import VueRoast from 'vue-roast';

Vue.use(VueRoast, config);
```
#### Config
| Prop          | Type          | Description               |Default   |
| ------------- |---------------|---------------------------|:--------:|
| ttl           | Number        | Default toast message ttl  | 5000      |
| threshold      | Number \| Boolean | Max number of displayed toasts at a time (false to disable) | 3 |


### API
In component:
```js
this.$toast(message, options);
```

Outside of component
```js
Vue.toast(message, options);
```

#### Message
| Prop               | Type     |
| ------------------ | -------- |
| title              | String   |
| content            | String   |
| creator            | String   |
| level              | String   |
| createdAt          | Date     |
#### Options
| Prop               | Type     | Description                               |
| ------------------ | -------- | ----------------------------------------- |
| ttl                | Number   | Toast message display time in miliseconds |
| truncateAfter      | Number   | Max message char length to display        |
| action             | Object   | Action triggered on toast click           |
| action.placeholder | String   | Action placeholder                        |
| action.method      | String   | Method to be invoked on click             |

## Tests

`npm test`

## Contributing

Please follow selected coding style guide.
Add unit tests for any new or changed functionality.
Lint and test your code.
