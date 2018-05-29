const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const base = require('./webpack.config.base')
const { resolve } = require('path')
const {
  filename,
  moduleName,
  vueLoaders
} = require('./utils')

module.exports = merge(base, {
  output: {
    filename: `${filename}.js`,
    library: moduleName,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: vueLoaders.scss,
        include: [
          resolve(__dirname, '../node_modules/@material'),
          resolve(__dirname, '../src')
        ]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: resolve(__dirname, `../reports/${process.env.NODE_ENV}.html`)
    })
  ]
})
