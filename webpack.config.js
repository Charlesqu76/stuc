const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack'); //引入webpack模块，ProvidePlugin是webpack身上的一个插件


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/[name].[hash:7].min.js',
        chunkFilename: "js/[id].[chunkhash:7].chunk.js"
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: "all", // 使用 all 模式
                    test: /[\\/]node_modules[\\/]/, // 匹配 node_modules 下的模块
                    name: "echarts", // 包命名，最终的命名要结合 output 的 chunkFilename
                    minChunks: 1,
                    minSize: 30000,
                    priority: 10 // 设置优先级
                }
            }
        }
    },
    mode: "production",
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                ]
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'static/[name].[hash:7].[ext]',
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./srcCar/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name].[hash:7].css",
        }),
        new BundleAnalyzerPlugin(), // 使用默认配置
        new webpack.ProvidePlugin({ //它是一个插件，所以需要按插件的用法new一个
            echarts: 'echarts',
            $: "jquery",
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
    }

};