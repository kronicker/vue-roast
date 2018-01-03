export default class {
  constructor(ttl, action = Function.prototype) {
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
}
