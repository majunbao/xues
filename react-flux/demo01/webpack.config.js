const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: '.',
    host: '0.0.0.0',
    inline: true
  }
}