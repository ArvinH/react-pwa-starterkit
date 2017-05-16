const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: `${__dirname}/src`,
        exclude: /bundle\.js$/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        options: {
          presets: [
            'es2015',
            'stage-1',
            'react',
          ],
          plugins: [
            'react-hot-loader/babel',
          ],
        },
      },
      {
        test: /\.css/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      },
    ],
  },
};
