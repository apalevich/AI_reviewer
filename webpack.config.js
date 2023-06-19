/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
        },
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // https://github.com/jantimon/html-webpack-plugin#options
            title: 'AI reviewer — the best programmers tool to review your code',
            template: './src/assets/index.html'
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        static: './dist',
        hot: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};