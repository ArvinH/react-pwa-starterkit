import express from 'express'
import path from 'path'
import webpack from 'webpack'
import bodyParser from 'body-parser'
import cors from 'cors'

const PORT = Number(process.env.PORT || 3001)

const app = express();

const config   = require('./webpack.config.js')
const compiler = webpack(config);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
})

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)

app.use(devMiddleware);
app.use(webpackHotMiddleware);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/static'))
app.use('/dist', express.static(__dirname + '/dist'))

app.use(cors())

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(PORT, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://localhost:${PORT}/`);
})

module.exports = app