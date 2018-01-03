import Timer from './Timer';
import ToastContainer from './components/Container';

const DEFAULT_POSITION = 'bottom-left';
const DEFAULT_TTL = 5000;
const DEFAULT_THRESHOLD = 3;

const cache = [];
const defaults = {};

function getTransition(position) {
  if (position === 'top-middle') return 'slide-fade-down';
  if (position === 'bottom-middle') return 'slide-fade-up';
  if (position.includes('right')) return 'slide-fade-left';
  return 'slide-fade-right';
}

function setDefaults(config = {}) {
  const ttl = config.ttl || DEFAULT_TTL;
  const threshold = config.threshold || DEFAULT_THRESHOLD;
  const position = config.positionClass || DEFAULT_POSITION;
  const transition = getTransition(position);
  const pushAction = position.includes('top') ? 'unshift' : 'push';
  Object.assign(defaults, { ttl, threshold, position, transition, pushAction });
}

function uniqueId(exclude) {
  const id = Math.ceil(Date.now() * Math.random());
  if (exclude.includes(id)) return uniqueId(exclude);
  return id;
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
function toast(message = {}, options = {}) {
  if (!message.title && !message.body && !message.footer) return;

  if (cache.length === defaults.threshold) cache.shift();
  options.ttl = options.ttl || defaults.ttl;

  const id = uniqueId(cache.map(el => el.id))
  const timer = new Timer(options.ttl);
  cache[defaults.pushAction]({ id, message, options, timer });
};

export default {
  install(Vue, config = {}) {
    setDefaults(config);

    const Container = Vue.extend(ToastContainer);
    const { position, transition } = defaults;
    const container = new Container({ propsData: { position, transition, toasts: cache } }).$mount();

    document.body.appendChild(container.$el);

    Vue.toast = toast;
    Vue.prototype.$toast = toast;
  }
};
