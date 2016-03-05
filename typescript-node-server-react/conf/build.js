var webpack = require('webpack');

module.exports = {
  entry: './assets/app/index.tsx',

  output: {
    filename: 'bundle.js',
    path: './server/public/'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },

  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]

};
