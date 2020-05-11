const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "[name].bundle.js",
    },
    mode: "development",
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
                use: ['style-loader', 'css-loader'],

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
            template: "./src/index.html",
            filename: "index.html"
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
    }

};