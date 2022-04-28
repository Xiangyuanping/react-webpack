const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//将相对路径解析为绝对路径，__dirname为当前文件所在的目录下，此处为./webpack文件夹
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackConfig = {
    performance: { hints: false },

    //打包模式:'production' or development'
    mode: 'production',

    //entery为webpack解析的入口（解析各种包依赖关系的入口），而不是项目访问的入口
    //官网描述：指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始
    entry: {
        app: [resolve('../src/index.js')],
    },

    //output为项目打包后的输出位置
    //官网描述：告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist
    output: {
        path: resolve('../dist'), //path为打包后的输出文件夹位置，此处为 ./dist文件夹
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,  // MiniCssExtractPlugin.loader 需要在css-loader之后解析
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')(), // 给css自动添加前缀
                                ],
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },

            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     exclude: /node_modules/,
            //     include: [resolve('../public/images')],
            //     loader: 'url-loader',
            //     options: {
            //         limit: 8192,
            //         name: '[name].[ext]',
            //         outputPath: '/images'
            //     }
            // },
            // {
            //     test: /\.(woff|eot|ttf|svg|gif)$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 8192,
            //         name: 'font/[name].[ext]'
            //     }
            // }
        ]
    },
    plugins: [
        //为项目生成一个可以访问的html文件，否则全是.js文件，没有访问的页面入口。默认为index.html,路径是基于根目录的相对路径
        new HtmlWebpackPlugin({
            template: './scripts/template/index.html',  //引用模板html文件生成项目的入口文件html
        }),
        new MiniCssExtractPlugin(),
    ],
    target: 'web', //必须添加此配置，才能实现浏览器的实时刷新
    devServer: {
        port: 8080,
        //contentBase: resolve('./dist'),  //当存在静态资源时，此项必须有。指向开发的静态资源目录，配合url-loader的outPath，匹配文件中的静态资源引用地址
        static:resolve(__dirname, "../dist"),
        open: true,    //启动后是否在浏览器自动打开
    }
}

module.exports = webpackConfig
