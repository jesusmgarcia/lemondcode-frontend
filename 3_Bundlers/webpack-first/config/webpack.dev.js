const base = require("./webpack.base.js");
const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const path = require("path");

const basePath = path.resolve(process.cwd());

module.exports = merge(base, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 8080,
  },
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]",
                localIdentContext: path.resolve(basePath, "src"),
              },
            },
          },
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
  plugins: [
    new Dotenv({
      path: "./config/dev.env",
    }),
  ],
});