const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: __dirname + "/js/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/docs', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [  // Array of plugins to apply to build chunk
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html",
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  devServer: {  // configuration for webpack-dev-server
    disableHostCheck: true,
    contentBase: './',  //source of static assets
    port: 7700, // port to run dev-server
  }
};