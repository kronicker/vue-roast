module.exports = {
  entry: './demo/main.js',
  vendor: false,
  dist: './dist-demo',
  html: {
    template: './demo/index.html'
  },
  copy: { from: './demo/logo.png', to: 'logo.png' },
  filename: {
    js: 'demo.min.js',
    css: 'style.css'
  }
};
