
module.exports = [
    {
        // 配置css-loader scss-loader
        test: /\.(scss|sass)|.css$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
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
    },
    {
        // 配置es6 转换 配合.babelrc用
        test: /\.js$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    sourceMap: true
                },
               
            }
        ],
        // 排除node_module里的js
        exclude: /node_module/
    },
    {
        // 图片处理，全部转成base64
        test:/\.(png|jpg|svg|gif)$/,
        use:[
            {
                loader:'url-loader',
            }
        ]
    }
]