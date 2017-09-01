module.exports = {
  entry: './demo/main.js',
  dist: './docs',
  vendor: false,
  html: {
    template: './demo/index.html'
  },
  copy: { from: './demo/logo.png', to: 'logo.png' },
  filename: {
    js: 'docs.min.js',
    css: 'style.css'
  }
};
