module.exports = {
  entry: './docs/src/main.js',
  dist: './docs',
  vendor: false,
  html: {
    template: './docs/src/index.html'
  },
  copy: { from: './docs/src/logo.png', to: 'logo.png' },
  filename: {
    js: 'docs.min.js',
    css: 'style.css'
  }
};
