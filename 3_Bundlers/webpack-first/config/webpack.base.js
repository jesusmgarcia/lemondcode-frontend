const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const basePath = path.resolve(process.cwd());

module.exports = {
  context: path.join(basePath, "src"),
  entry: ["./index.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
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
  ]
};
