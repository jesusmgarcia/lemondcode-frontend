const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const basePath = path.resolve(process.cwd());

module.exports = {
  context: path.join(basePath, "src"),
  entry: {
    app: "./index.js",
    appStyles: ["./styles.scss"]
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.join(basePath, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ]
};
