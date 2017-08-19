const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'app.css',
  allChunks: true
})

const VENDOR_LIBS = [
  'axios', 'classnames', 'react', 'react-dom',
  'react-redux', 'redux', 'redux-saga', 'react-router', 'react-router-dom'
]

const config = {
  devtool: 'source-map',
  entry: {
    bundle: [
      'babel-polyfill',
      './src/index.js'
    ],
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: [
            'transform-react-jsx',
            [
              'react-css-modules',
              {
                exclude: 'node_modules',
                generateScopedName: '[name]__[local]___[hash:base64:5]',
                filetypes: {
                  '.scss': {
                    syntax: 'postcss-scss',
                    plugins: ['postcss-nesting', 'postcss-css-variables']
                  }
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            'css-loader?importLoader=1&modules&localIdentName=[name]__[local]___[hash:base64:5]',
            'sass-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          'file-loader',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.svg$/,
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          },
          {
            loader: 'react-svg-loader',
            query: { jsx: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    extractSass
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Containers: path.resolve(__dirname, 'src/containers')
    },
    extensions: ['.js', '.scss']
  }
}

module.exports = config
