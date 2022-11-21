const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
// const packageJson = require('./package.json')

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        main: 'main@http://localhost:8081/remoteEntry.js'
      }
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
