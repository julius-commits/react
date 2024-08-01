const htmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new htmlwebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
    }),
  ],
};
