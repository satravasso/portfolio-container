const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

const commonConfig = require('./webpack.common');
const packageJson = require('./package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, 'build')
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        main: 'main@http://localhost:8081/remoteEntry.js'
      },
      shared: {
        ...packageJson.dependencies,
        axios: {
          singleton: true
        },
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '18.2.0'
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: packageJson['react-dom']
        }
      }
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
