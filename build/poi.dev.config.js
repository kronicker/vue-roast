module.exports = {
  entry: './examples/main.js',
  vendor: false,
  dist: './demo',
  html: {
    template: './examples/index.html'
  },
  filename: {
    js: 'demo.min.js',
    css: 'style.css'
  }
};
