const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const webpack = require('webpack'); //引入webpack模块，ProvidePlugin是webpack身上的一个插件


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'static/js/[name].[hash:4].min.js',
        chunkFilename: "static/js/[id].[chunkhash:4].chunk.js"
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            'app': path.resolve(__dirname,'./src/app')
        },
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
    },
    mode: "development",
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
                        limit: 4069,
                        name: 'static/img/[name].[hash:7].[ext]',
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./static/css/[name].[hash:4].css",
        }),
        // new BundleAnalyzerPlugin(), // 使用默认配置
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,        
    }

};