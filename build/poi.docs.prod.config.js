module.exports = {
  entry: './src/docs/main.js',
  webpack(config) {
    config.output.publicPath = './';
    return config;
  },
  dist: './docs',
  html: {
    template: './src/docs/index.html'
  },
  copy: { from: './src/docs/logo.png', to: 'logo.png' },
  filename: {
    js: '[name].min.js',
    css: 'style.css'
  }
};
