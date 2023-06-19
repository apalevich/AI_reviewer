/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { VuetifyPlugin } = require('webpack-plugin-vuetify');

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
                test: /\.(css|sass|scss)$/i,
                use: [
                    "style-loader",
                    "css-loader",
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
        new VuetifyPlugin({
            styles: { configFile: './src/settings.scss' }
        })
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