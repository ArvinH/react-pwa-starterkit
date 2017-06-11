const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const handleServerRender = require('./handleServerRender');

const app = express();
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: { colors: true },
}));

app.use(require('webpack-hot-middleware')(compiler));
// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'statics')));

app.get('/', (req, res) => {
  handleServerRender.handleRender(req, res);
});


app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});

module.exports = app;
