const merge = require('webpack-merge');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new uglifyJsPlugin()
    ]
})