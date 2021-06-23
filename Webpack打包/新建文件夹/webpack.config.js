const path = require('path');

module.exports = {
    entry: './public/index3.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './build', //设置服务器访问的基本目录
        host: 'localhost', //服务地址的ip地址
        port: 8080, //端口
        open: true //自动打开页面
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        require('autoprefixer')
                    ]
                }
            }]
        }]
    }
}