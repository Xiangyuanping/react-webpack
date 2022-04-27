const path = require('path');

let webTarget = 'http://etax.sichuan.chinatax.gov.cn:5000/';// 公司环境

let args = process.argv.slice(2),
    pathB = args[1] === 't' ? '../../../tomcat/webapps/dist' : '../dist';
module.exports = {
    build: {
        env: 'production',
        assetsRoot: path.resolve(__dirname, pathB),
        assetsPublicPath: '../dist',
        assetsSubDirectory: 'static',
        dist: path.join(__dirname, '../dist'),
        productionGzip: true,
        productionSourceMap: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: 'development',
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        mock: path.join(__dirname, '../mock'),
        host: '0.0.0.0',
        port: 9090,
        openWin: false,
        historyApiFallback: true,
        stats: {colors: true},
        cssSourceMap: true,
        notifyOnErrors: true,
        overlay: true,
        inline: true,
        noInfo: true,
        proxy: {
            '/develop': {
                target: webTarget,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/develop': ''
                }
            },
            '/nbdzswj-web': {
                target: webTarget,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/develop': ''
                }
            },
            '/wszx-web': {
                target: webTarget,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/develop': ''
                }
            },
            '/dzzlk': {
                target: webTarget,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/develop': ''
                }
            },
            '/hgzx-web': {
                target: webTarget,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/develop': ''
                }
            },
            '/scdzswj-web': {
                target: webTarget,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/develop': ''
                }
            },
            '/yhzx-web': {
                target: webTarget,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/develop': ''
                }
            }
        }
    }
};
