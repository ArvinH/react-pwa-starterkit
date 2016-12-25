const path               = require('path')
const webpack            = require('webpack')
const CopyWebpackPlugin  = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const loaders            = require('./webpack/loaders.config')
const plugins            = require('./webpack/plugins.config')

module.exports = {
  entry:   './src/index',
  output:  {
    path:     path.join(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {verbose: false}),
    new CopyWebpackPlugin([
      {from: 'static/images/', to: 'images'},
      {from: 'manifest.json'},
      {from: 'static/favicon.ico'},
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress:  {
        warnings: false,
      },
      sourceMap: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    ...plugins,
  ],
  module:  {
    loaders: loaders
  },
};
