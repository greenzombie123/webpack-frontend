const webpack = require("webpack");
const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     templateContent: ({ htmlWebpackPlugin }) =>
  //       '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
  //       htmlWebpackPlugin.options.title +
  //       '</title></head><body><div id="app"></div></body></html>',
  //     filename: "index.html",
  //   }),
  // ],
};

module.exports = config;
