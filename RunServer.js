require('babel-core/register')({
  presets: [
    'es2015',
    'stage-1',
    'react',
  ],
});

require('babel-polyfill');

delete process.env.BROWSER;

module.exports = require('./server');
