const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/javascripts/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "javascripts/[name].js",
  },
  module: {
    rules: [
      {
        // ES6のトランスパイル
        test: /\.js/,
        exclude: /\node_modules/, // npm対象外
        use: [
          {
            loader: "babel-loader",
            options: {
              // babelのライブラリを束ねているプリセット
              presets: [
                ["@babel/preset-env", { targets: "> 30%, not dead" }],
                // "@babel/preset-react",
              ],
            },
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
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        // 画像を自動で圧縮
        test: /\.(png|jpg|jpeg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "images/[name]-[hash].[ext]",
              publicPath: "/",
            },
          },
          {
            // ファイルサイズの圧縮する
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/index.pug",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      template: "./src/stylesheets/style.sass",
      filename: "./stylesheets/[name].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
