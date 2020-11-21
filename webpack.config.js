const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'static/js/[name].[hash:4].min.js',
        chunkFilename: "static/js/[id].[chunkhash:4].chunk.js"
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            'app': path.resolve(__dirname, './src/app')
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
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]-[local]-[hash:base64:5]',
                            }
                        }
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
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        hot: true
    }

};