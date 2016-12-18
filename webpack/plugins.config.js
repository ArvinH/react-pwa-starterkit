const HtmlWebpackPlugin = require('html-webpack-plugin');

const OfflinePlugin = require('offline-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
  }),
  new OfflinePlugin()
]

export default plugins