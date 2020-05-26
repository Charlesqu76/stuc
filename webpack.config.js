const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: './srcCar/index.js',
    output: {
        filename: 'js/[name].[hash].min.js',
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    mode: "production",
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: '../'
                    }},                
                    {loader: 'css-loader'
                    },
                    

              ] 
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
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
           filename: "./css/[name].[hash].css",
       })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
    }

};