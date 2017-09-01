module.exports = {
  entry: './demo/main.js',
  dist: './docs',
  homepage: '/vue-roast/',
  html: {
    template: './demo/index.html'
  },
  copy: { from: './demo/logo.png', to: 'logo.png' },
  filename: {
    js: '[name].min.js',
    css: 'style.css'
  }
};
