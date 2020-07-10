// 公共配置模块
const common = require('./webpack.common.js')
// webpack合并对象模块
const { merge } = require('webpack-merge')
// 导入生产版本的rules
const rules = require('./rules.dev');
// 导入生产环境的plugins
const plugins = require('./plugin.prod')


module.exports = merge(common,{
    // 生产环境，使用production模式，可以获取对应的全局变量 process.env.NODE_ENV == production 
    mode:'development',
    // 处理出口的js代码模式，none用于生产版本
    devtool:'source-map',
    // 配置本地服务器
    devServer:{
        // 根目录
        contentBase:'./dist',
        // 端口
        port:'8089',
        // 热更新
        hot:true,
        // 默认页
        openPage:'index/index.html',
        // 打开文件
        open:true
    },
    module:{
        rules
    },
    plugins
}) 