const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    performance: {
        // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
        hints: "warning",
        // 开发环境设置较大防止警告
        // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
        maxEntrypointSize: 5000000,
        // 最大单个资源体积，默认250000 (bytes)
        maxAssetSize: 3000000
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        //按需加载
        chunkFilename:'[name]_[chunkhash:8].js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, '../src/components'),
            '@pages':path.resolve(__dirname, '../src/pages'),
            '@routers':path.resolve(__dirname, '../src/routers'),
            '@':path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(csv|tsv)$/,
                use:['csv-loader']
            },
            {
                test: /\.xml$/,
                use:['xml-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','es2015','react']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '管理输出',
            template: path.resolve(__dirname, '../src/index.html'),
            favicon: path.resolve(__dirname, '../src/assets/images/favicon.ico')
        }),
    ]
};
