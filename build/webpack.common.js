// 引入nodejs 的path模块，用来处理绝对路径
const path = require('path')

module.exports = {
    // path.join() 用来处理路径
    entry:{
        'list':path.join(__dirname,'../src/pages/list/index.js'),
        'index':path.join(__dirname,'../src/pages/index/index.js')
    },
    output:{
        // 打包后输出文件的路径
        path:path.join(__dirname,"../dist"),
        // 打包后输出文件的名字
        filename:'js/[hash:8].js'
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src/')
        }
    }
}