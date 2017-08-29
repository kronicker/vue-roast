const { name } = require('../package.json');

console.log(name);

module.exports = {
  entry: './src/index.js',
  vendor: false,
  html: false,
  filename: {
    js: `${name}.min.js`,
    css: 'style.css'
  }
};
