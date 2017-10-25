const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/main.jsx',
    './index.html'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
    alias: {
      source: path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: ['babel-loader'], exclude: ["/node_modules/"] },
      { test: /\.html$/, use: [{ loader: 'file-loader', options: {
        name: '[path][name].[ext]'}}]
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true
  },
  devtool: "source-map",
  plugins: [
     new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()
  ]
};