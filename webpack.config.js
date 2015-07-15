var webpack = require("webpack");

module.exports = {
  target: "web",
  debug: true,
  devtool: "source-map",
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8000",
      "./docs/index.js"
    ]
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader?optional=runtime"] },
      { test: /\.svg$/, loader: "svg-inline" }
    ]
  },
};
