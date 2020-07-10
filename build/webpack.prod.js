// 公共配置模块
const common = require('./webpack.common.js')
// webpack合并对象模块
const { merge } = require('webpack-merge')
// 导入生产版本的rules
const rules = require('./rules.prod')
// 导入生产版本的plugins
const plugins = require('./plugin.prod')

module.exports = merge(common, {
    // 生产环境，使用production模式，可以获取对应的全局变量 process.env.NODE_ENV == production 
    mode: 'production',
    // 处理出口的js代码模式，none用于生产版本
    devtool: 'none',
    module: {
        rules
    },
    plugins,
    // 配置合并多个css （没有测试成功）
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 30000,
    //         minChunks: 1,
    //         maxAsyncRequests: 5,
    //         maxInitialRequests: 3,
    //         name: true,
    //         cacheGroups: {
    //             styles: {
    //                 name: 'style',
    //                 test: /\.css$/,
    //                 chunks: 'all',
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
})