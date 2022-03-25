const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/modules/home.js',
    intialLoad: './src/modules/initial-load.js',
    menu: './src/modules/menu.js',
    contact: './src/modules/contact.js'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Output Management',
  //   }),
  // ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ],
  },
};