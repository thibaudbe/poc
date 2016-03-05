var externalModules = require('./externalModules');
var webpack = require('webpack');


module.exports = [{
  name: 'SERVER SIDE',
  entry: './assets/app.ts',

  target: 'node',
  externals: [externalModules()],

  output: {
    filename: 'app.js',
    path: './server/'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },

  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

},{

  name: 'CLIENT SIDE',
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

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

}];
