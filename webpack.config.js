const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/javascripts/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'javascripts/[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
                pretty: true,
            }
          },
        ],
      },
      {
          test: /\.(css|sass|scss)/,
          use: [
              {
                  loader: MiniCssExtractPlugin.loader,
              },
              {
                  loader: 'css-loader',
                  options: {
                      sourceMap: true,
                  }
              },
              {
                  loader: 'sass-loader',
              },
          ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      template: './src/stylesheets/style.sass',
      filename: './stylesheets/[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
};
