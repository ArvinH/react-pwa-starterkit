const loaders = [{
  test:    /\.js$/,
  loader:  'babel-loader',
  exclude: /(node_modules|bower_components)/,
  query:   {
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
    test:    /\.css/,
    loaders: ['style', 'css'],
  },
  {
    test:   /\.json$/,
    loader: 'json-loader'
  },
  {
    test:    /\.scss$/,
    loaders: [
      'style',
      'css',
      'autoprefixer',
      'sass'
    ],
  },
  {
    test:   /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url?limit=10000&mimetype=application/font-woff"
  },
  {
    test:   /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url?limit=10000&mimetype=application/font-woff"
  },
  {
    test:   /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url?limit=10000&mimetype=application/octet-stream"
  },
  {
    test:   /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file"
  },
  {
    test:   /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url?limit=10000&mimetype=image/svg+xml"
  }
]

export default loaders