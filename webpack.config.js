require("dotenv").config();

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js"
  },
  rules: [
    {
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        presets: ["react", "es2015", "stage-0"],
        plugins: ["transform-class-properties"]
      }
    },
    {
      test: /\css$/,
      loader: "style-loader|css-loader"
    }
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: "hospital-konnect",
      hash: true,
      template: "./public/index.html" // Load a custom template (ejs by default see the FAQ for details)
    }),
    new ExtractTextPlugin({
      filename: "app.css",
      disable: false,
      allChunks: true
    }),
    // Read the .env file
    new Dotenv({
      path: path.join(__dirname, ".env"),
      systemvars: true
    })
  ]
};
