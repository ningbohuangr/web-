const { resolve } = require('path');
const path = require('path');
const { webpack, sources } = require('webpack');

module.exports = {
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    devtool:"eval-cheap-module-source-map",
    devServer: {
        contentBase: './build', //设置服务器访问的基本目录
        host: 'localhost', //服务地址的ip地址
        port: 8080, //端口
        open: true, //自动打开页面,
        
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
            },{
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
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
                test:/\.eot|svg|ttf|woff|woff2/,
                use:[{
                    loader:'file-loader',
                    options:{
                        outputPath:'./font',
                       sourcesMap:true
                    }
                }]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:'babel-loader'
            }
        ]
    }
}