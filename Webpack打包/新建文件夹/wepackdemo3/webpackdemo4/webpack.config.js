const { resolve } = require('path');
const path = require('path');
const { webpack } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCssAssetssPlugin = require('optimize-css-assets-webpack-plugin')webpcak5暂时被弃用
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { ClearWebpackPlugin, CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[hash]bundle.js'
    },
    devServer: {
        contentBase: './build', //设置服务器访问的基本目录
        host: 'localhost', //服务地址的ip地址
        port: 8080, //端口
        open: true, //自动打开页面
        hot:true
    },
    
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', {
                    loader: 'postcss-loader'
                    // options: {
                    //     plugins: [
                    //         require('autoprefixer')
                    //     ]
                    // }
                }]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                
            },
            {
                test: /\.(png|jpg|gif|jepg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash]aixin.jpg',
                            // context:'../'打包后的文件目录
                            // publicPath:'www.abc.com/img'发布目录
                            outputPath: './img'
                        }
                    }
                ]
            },
            {
                test: /\.eot|svg|ttf|woff|woff2/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './font'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: {
                        list: [
                            {
                                tag: 'img',
                                attribute: 'data-src',
                                type: 'src',
                            },
                        ]
                    },
                },
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'wepack.html',
            minify: {
                minimize: true,//是否打包为最小值
                removeAttributeQuotes: true,//去除注释
                collapseWhitespace: true,//去除空格
                minfiyCSS: true,//压缩html样式
                minifyJS: true,//压缩html内的js
                removeEmpotyElements: true,//清除内容为空的元素
            },
            hash: true//引入产出资源的时候加上哈希避免缓存
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "./public/assets", to: "./assets" },
            ],
        }),
        new CleanWebpackPlugin(),
        // new webpack.NamedModulesPlugin(),被移除
        //  new webpack.HotModuleReplacementPlugin() //新语法
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
        ],
    },
}