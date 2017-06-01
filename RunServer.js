require('babel-core/register')({
  presets: [
    'es2015',
    'stage-1',
    'react',
  ],
});

require('babel-polyfill');

module.exports = require('./server');
