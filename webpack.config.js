const path = require('path');
const ROOT_PATH = path.join(__dirname, './');
const PUBLIC_ASSETS_PATH = '/';

module.exports = {
  entry: path.resolve(ROOT_PATH, 'src/index.js'),
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    publicPath: PUBLIC_ASSETS_PATH
  },
  devServer: {
      port: 9000,
  },
};