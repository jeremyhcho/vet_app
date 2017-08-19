const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIBS = [
  'axios', 'classnames', 'react', 'react-dom',
  'react-redux', 'redux', 'redux-saga', 'react-router', 'react-router-dom'
]

const config = {
  devtool: 'eval-source-map',
  entry: {
    bundle: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index.js'
    ],
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'react-hot-loader/webpack'
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          plugins: [
            'transform-react-jsx',
            [
              'react-css-modules',
              {
                webpackHotModuleReloading: true,
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
        exclude: /node_modules/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?importLoader=1&modules&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/,
        exclude: /node_modules/
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
  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    proxy: {
      '*': 'http://localhost:3000'
    },
    stats: {
      colors: true
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
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
