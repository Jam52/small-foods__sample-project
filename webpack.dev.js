const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/i,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            meta: {viewport: 'content="width=device-width, initial-scale=1'}
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
    ],
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/client/views/index.html'
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      }
}