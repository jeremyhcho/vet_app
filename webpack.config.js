const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIBS = [
  'axios', 'classnames', 'react', 'react-dom',
  'react-redux', 'redux', 'redux-saga', 'react-router', 'react-router-dom'
]

const config = {
  devtool: 'eval',
  entry: {
    bundle: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js'],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
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
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
        test: /\.scss$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          'file-loader',
          'image-webpack-loader'
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'assets'),
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  }
}

module.exports = config
