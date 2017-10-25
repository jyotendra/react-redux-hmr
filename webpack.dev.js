const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  devServer: {
    compress: true,
    port: 9000,
    hot: true
  },
  devtool: "source-map",
  plugins: [
     new webpack.HotModuleReplacementPlugin()
  ]
})