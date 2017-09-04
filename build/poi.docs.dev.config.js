module.exports = {
  entry: './src/docs/main.js',
  dist: './docs',
  vendor: false,
  html: {
    template: './src/docs/index.html'
  },
  copy: { from: './src/docs/logo.png', to: 'logo.png' },
  filename: {
    js: 'docs.min.js',
    css: 'style.css'
  }
};
