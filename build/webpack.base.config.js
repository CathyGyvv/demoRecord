const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const appConfig = require('./app.config.js');
const srcPath = '../assets/';
const isDev = process.env.NODE_ENV === 'development';
const publicPath = getPublicPath();
const outputPath = isDev ? '' : appConfig.relativePrefix;
function getPublicPath() {
  if (appConfig.prodPublicPath === './') {
    return '../';
  } else {
    return appConfig.absolutePrefix;
  }
}
function getRandomMix(count) {
  let buf = '';
  const str = '0123456789abcdefghijklmnopqrstuvwsyz';
  const str_len = str.length;
  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * str_len);
    buf += str.charAt(num);
  }
  return buf;
}

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, srcPath, 'index.js')
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.join(__dirname, srcPath, 'components'),
      router: path.join(__dirname, srcPath, 'router'),
      store: path.join(__dirname, srcPath, 'store'),
      pages: path.join(__dirname, srcPath, 'pages'),
      api: path.join(__dirname, srcPath, 'api'),
      utils: path.join(__dirname, srcPath, 'utils'),
      public: path.join(__dirname, srcPath, 'public')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ],
        options: {
          fix: true
        }
      },
      {
        test: /.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ],
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(png|jpg|gif|svg|pdf)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[contenthash:8].[ext]',
            limit: 10240,
            publicPath: publicPath + 'imgs/',
            outputPath: outputPath + 'imgs/'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash:8].[ext]',
            publicPath: publicPath + 'fonts/',
            outputPath: outputPath + 'fonts/'
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash:8].[ext]',
            publicPath: publicPath + 'media/',
            outputPath: outputPath + 'media/'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.APP_PREFIX': JSON.stringify(appConfig.absolutePrefix)
    }),
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
      templateParameters: {
        appPrefix: process.env.NODE_ENV == 'development' ? '/' : appConfig.prodPublicPath + appConfig.relativePrefix,
        publishVersion: getRandomMix(8)
      }
    }),
    new CleanWebpackPlugin()
  ],
  performance: false,
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}
