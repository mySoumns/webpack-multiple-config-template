// 分离css的另一种方法 （暂时不用）
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 分离css
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// dev rules配置
module.exports = [
    {
        // 配置css-loader scss-loader
        test: /\.(scss|sass)|.css$/,
        // ExtractTextPlugin.extract 用来分离css
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            publicPath: '../',
            use: [
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader',
                },
                {
                    //postcss-loader插件，用于自动补全样式的浏览器前缀
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            require('autoprefixer')({
                                overrideBrowserslist: [ //浏览器列表
                                    'ie>=8',
                                    'Firefox>=20',
                                    'Safari>=5',
                                    'Android>=4',
                                    'Ios>=6',
                                    'last 4 version',
                                ]
                            })]
                    }
                }
            ]
        })
    },
    {
        // 配置es6 转换 配合.babelrc用
        test: /\.js$/,
        use: [
            {
                loader: 'babel-loader'
            }
        ],
        // 排除node_module里的js
        exclude: /node_module/
    },
    {
        // 图片处理 使用url-loader
        test: /\.(png|jpg|svg|gif)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    // 图片大于1kb  不转换为base64
                    limit: 1000, 
                    // 当不转换的时候图片的输出路径，也可以用name 字段设置
                    outputPath: 'images'
                }
            }
        ]
    }
]