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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true
      }
    }),
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
            plugins: ['transform-react-constant-elements']
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
    extensions: ['.jsx', '.css', '.json', '.js'],
    alias: {
        'react': 'react-lite',
        'react-dom': 'react-lite',
        'react-tap-event-plugin': 'react-lite/lib/react-tap-event-plugin',
      },
    },
}