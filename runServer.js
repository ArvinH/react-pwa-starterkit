require("babel-core/register")({
  presets: [
    "es2015",
    "stage-0",
    "stage-1",
  ],
  plugins: [
    "transform-decorators-legacy"
  ]
});

require('babel-polyfill');

module.exports = require('./server');