const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    devtool: false,
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
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
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
        }),
        new MiniCssExtractPlugin ({filename:'[name].styles.css'}),
        // new CopyWebpackPlugin([{
        //     from: './src/client/images/bg 5.png',
        //     to: path.resolve(__dirname, 'dist')
        // }]),
        // new ImageminPlugin({
        //     disable: false,
        //     pngquant: {
        //       quality: [0.3, 0.5]
        //     },
        //   })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      }
}