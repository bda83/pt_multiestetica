const path = require('path');
const ROOT_PATH = path.join(__dirname, './');
const PUBLIC_ASSETS_PATH = '/';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(ROOT_PATH, 'src/index.js'),
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: '[name].[contenthash].bundle.js',
        publicPath: PUBLIC_ASSETS_PATH,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true
                    },
                  },
                ],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: 'url-loader',
                },
            },
        ]
    },
    devServer: {
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            publicPath: PUBLIC_ASSETS_PATH,
            scriptLoading: "defer",
        })
    ],
};