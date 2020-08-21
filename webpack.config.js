const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const devConfig = require('./build/webpack.dev.config.js');
const prodConfig = require('./build/webpack.prod.config.js');
const ip = require('ip').address();
const portFinder = require('portfinder');
const isDev = process.env.NODE_ENV === 'development';
const devWebpackConfig = merge(devConfig,
  {
    devServer: {
      host: ip,
	  disableHostCheck: true,
      proxy: {
        '/api': {
          target: 'http://192.168.2.90:8080',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
);
if (isDev) {
  module.exports = new Promise((resolve, reject) => {
    portFinder.getPort({ port: 9000, stopPort: 9999 }, function (err, port) {
      if (err) {
        reject(err);
      } else {
        devWebpackConfig.devServer.port = port;
        resolve(devWebpackConfig);
      }
    });
  });
} else {
  if (process.env.BUILD_REPORT) {
    module.exports = merge(prodConfig, {
      plugins: [
        new BundleAnalyzerPlugin()
      ]
    })
  } else {
    module.exports = prodConfig;
  }
}
