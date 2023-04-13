const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: 'src/**/*',
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    host: '0.0.0.0',
    open: {
      app: {
        name: "google-chrome-unstable",
        arguments: ["--force-device-scale-factor=1"]
      }
    },
  }
});
