/**
 * by sy@serv.you.com
 * 新建时间：2018.08.01
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('../config');
const dir = '../';
const path = require('path');
const projectRoot = path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

let vendor = [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'jquery'
];
const baseConfig = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: path.join(__dirname, dir + 'src/main.js'),
        vendor: vendor
    },
    output: {
        filename: '[name].[hash].js',
        path: '/',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpe?g|gif|svg|eot|woff|ttf)(\?.*)?$/,
            loader: 'url?limit=8192&name=static/img/[hash:10].[name].[ext]'
        }, {
            test: /\.swf$/,
            loader: 'url?limit=1024&name=static/webuploader/[hash:10].[name].[ext]'
        }, {
            test: /\.(htc)$/,
            loader: 'url-loader?limit=1'
        }, {
            test: /\.css|less$/,
            loaders: ['style-loader', 'css-loader', 'less-loader']
        }]
    },
    resolve: {},
    resolveLoader: {
        fallback: [path.join(__dirname, dir + 'node_modules')]
    },
    plugins: [
        new FriendlyErrorsPlugin({
            // 成功的时候输出
            compilationSuccessInfo: {
                messages: [`Your application is running here: http://localhost:8080`]
            },
            // 是否每次都清空控制台
            clearConsole: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'html-withimg-loader!' + './index.html',
            inject: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: merge({
        contentBase: config.dev.mock,
        historyApiFallback: true,
        host: config.dev.host,
        port: config.dev.port,
        disableHostCheck: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 1000
        },
        open: config.dev.openWin
    }, config.dev)
};

module.exports = baseConfig;