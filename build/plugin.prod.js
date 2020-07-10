// node的path模块，处理路径
const path = require('path')
// 处理html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清理dist文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 分离css的一种方式（暂时不用）
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 分离css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 压缩优化css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 去点冗余css
const PurifyCssWebpack = require('purifycss-webpack'); // 引入PurifyCssWebpack插件
const glob = require('glob');  // 引入glob模块,用于扫描全部html文件中所引用的css

module.exports = [
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
    // css分离的另一种方式
    // new MiniCssExtractPlugin({
    //     filename: '[name]/css/[name].css',
    //     // chunkFilename: '[id].css',
    // }),
    // 分离css
    new ExtractTextPlugin('css/[name].[hash:8].css'),
    // 消除css冗余
    new PurifyCssWebpack({
        paths: glob.sync(path.join(__dirname, '../src/pages/*/*.html'))
    }),
    // 压缩优化css
    new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        // cssProcessorOptions: cssnanoOptions,
        cssProcessorPluginOptions: {
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
                normalizeUnicode: false
            }]
         },
        canPrint: true
    }),
    // 清理dist文件夹
    new CleanWebpackPlugin()
]