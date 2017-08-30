const { name } = require('../package.json');

module.exports = {
  entry: './src/index.js',
  vendor: false,
  html: false,
  filename: {
    js: `${name}.min.js`,
    css: 'style.css'
  }
};
