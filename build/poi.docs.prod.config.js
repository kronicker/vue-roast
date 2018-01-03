module.exports = {
  entry: './docs/src/main.js',
  dist: './docs',
  html: {
    template: './docs/src/index.html'
  },
  copy: { from: './docs/src/logo.png', to: 'logo.png' },
  filename: {
    js: '[name].min.js',
    css: '[name].css'
  }
};
