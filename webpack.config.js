var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: './assets/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
            presets: [
              ['es2015', { "modules": false }],
              'react'
              ],
            plugins: []
          }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.jsx', '.css', '.json', '.js']
  },
}