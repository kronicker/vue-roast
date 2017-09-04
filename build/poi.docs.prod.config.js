module.exports = {
  entry: './src/docs/main.js',
  dist: './docs',
  homepage: '/vue-roast/',
  html: {
    template: './src/docs/index.html'
  },
  copy: { from: './src/docs/logo.png', to: 'logo.png' },
  filename: {
    js: '[name].min.js',
    css: 'style.css'
  }
};
