var webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',

  output: {
    filename: 'bundle.js',
    path: './src/'
  },

  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts', exclude: /node_modules/ }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
};
