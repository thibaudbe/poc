var webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',

  output: {
    filename: 'bundle.js',
    path: './dist/'
  },

  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts', exclude: /node_modules/ }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },

  devtool: 'inline-source-map'
};
