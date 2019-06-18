const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const webpack = require('webpack');

module.exports = merge(base, {
    mode: 'production',
    devtool: 'source-map',
    plugins:[
        new webpack.DefinePlugin({
            api_env:"'development'"
        })
    ]
});
