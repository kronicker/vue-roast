module.exports = options => ({
  entry: './demo/main.js',
  dist: './docs',
  html: {
    template: './demo/index.html'
  },
  copy: { from: './demo/logo.png', to: 'logo.png' },
  removeDist: false,
  sourceMap: options.mode === 'development'
});
