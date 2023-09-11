const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false
        }
      },
      {
        test: /\.css$/i,
        exclude: /styles.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  optimization: {

  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/', to: 'assets/' },      
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      ignoreOrder: false
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
}