// node的path模块，处理路径
const path = require('path')
// 处理html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清理dist文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const plugins = [
    // 处理html
    new HtmlWebpackPlugin({
        title: '测试',
        template: path.join(__dirname, '../src/pages/index/index.html'),
        filename: 'index/index.html',
        minify: false,
        inject: 'body',
        chunks: ['index']

    }),
    new HtmlWebpackPlugin({
        title: '测试',
        template: path.join(__dirname, '../src/pages/list/index.ejs'),
        filename: 'list/index.html',
        minify: false,
        inject: 'body',
        chunks: ['list']

    }),
    // 清理dist文件夹
    new CleanWebpackPlugin()
]

module.exports = plugins