const { resolve } = require('path');
const path = require('path');
const { webpack } = require('webpack');
module.exports = {
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: './build', //设置服务器访问的基本目录
        host: 'localhost', //服务地址的ip地址
        port: 8080, //端口
        open: true, //自动打开页面
        hotOnly:true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

}