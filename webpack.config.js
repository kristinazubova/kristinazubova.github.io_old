const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          esModule: false,
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      inject: "body"
    })
  ],
  devServer: {
    // configuration for webpack-dev-server
    disableHostCheck: true,
    contentBase: "./", //source of static assets
    port: 7700 // port to run dev-server
  }
};

module.exports = config;
