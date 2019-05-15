const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const webpack = require('webpack');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase:"../dist",
        compress: true,
        historyApiFallback: true,
        port: 3001
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});
