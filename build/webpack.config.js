/**
 * by sy@serv.you.com
 * 新建时间：2018.08.01
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('../config');
const utils = require('./utils');
const dir = '../';
const path = require('path');
const projectRoot = path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');

let vendor = [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'jquery'
];
const devConfig = {
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
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css', '.svg'],
        alias: {
            src: path.join(__dirname, '../src'),
            components: path.join(__dirname, '../src/components'),
            routes: path.join(__dirname, '../src/bizRoutes'),
            views: path.join(__dirname, '../src/views'),
            assets: path.join(__dirname, '../src/assets'),
            plugins: path.join(__dirname, '../src/plugins'),
            actions: path.join(__dirname, '../baseModules/redux/actions'),
            reducers: path.join(__dirname, '../baseModules/redux/reducers'),
            biz: path.join(__dirname, '../baseModules'),
            mock: path.join(__dirname, '../mock/'),
            fw: path.join(__dirname, '../framework'),
            fa: path.join(__dirname, '../framework/assets'),
            fc: path.join(__dirname, '../framework/components'),
            layout: path.join(__dirname, '../framework/layout'),
            theme: path.join(__dirname, '../framework/layout/theme'),
            upload: path.join(__dirname, '../node_modules/webuploader')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, dir + 'node_modules')]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'//忽略则以name为输出文件的名字，否则以此为输出文件名字
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'html-withimg-loader!' + './index.html',
            inject: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
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
const getIP = function () {
    const interfaces = require('os').networkInterfaces();
    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (const i in iface) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
};
module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            const myPort = devConfig.devServer.port || port;
            // publish the new Port, necessary for e2e tests
            process.env.PORT = myPort;
            // add port to devServer config
            //devConfig.devServer.port = port;

            // Add FriendlyErrorsPlugin
            devConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${getIP()}:${port}`, //devWebpackConfig.devServer.host
                        `Your application is running here: http://localhost:${port}`]
                },
                onErrors: config.dev.notifyOnErrors
                    ? utils.createNotifierCallback()
                    : undefined,
                clearConsole: true
            }));

            resolve(devConfig);
        }
    });
});
