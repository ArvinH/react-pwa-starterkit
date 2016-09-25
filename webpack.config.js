var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
      query: {
        presets: [
          "es2015",
          "stage-1",
          "react"
        ],
        plugins: [
          "react-hot-loader/babel"
        ]
      }
    },
    {
      test: /\.css/,
      loaders: ["style", "css"]
    }]
  }
};