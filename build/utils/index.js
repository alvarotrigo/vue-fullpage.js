const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { join } = require('path')

const {
  red,
  logError
} = require('./log')

const {
  processStyle
} = require('./style')

const uppercamelcase = require('uppercamelcase')

exports.write = require('./write')

const {
  author,
  name,
  version,
  dllPlugin
} = require('../../package.json')

const authorName = author.name;
const minExt = process.env.NODE_ENV === 'production' ? '.min' : ''

exports.author = authorName
exports.version = version
exports.dllName = dllPlugin.name
exports.moduleName = uppercamelcase(name)
exports.name = 'vue-fullpage'
exports.filename = 'vue-fullpage' + minExt
exports.banner = `/*!
 * ${name} v${version}
 * https://github.com/alvarotrigo/vue-fullpage.js
 *
 * @license vue-fullpage is released under the MIT license but notice
 * fullPage.js is licensed under GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/vue-fullpage/ - A project by Alvaro Trigo
 */
`

// log.js
exports.red = red
exports.logError = logError

// It'd be better to add a sass property to the vue-loader options
// but it simply don't work
const sassOptions = {
  includePaths: [
    join(__dirname, '../../node_modules')
  ]
}

// don't extract css in test mode
const nullLoader = process.env.NODE_ENV === 'common' ? 'null-loader!' : ''
exports.vueLoaders =
  process.env.BABEL_ENV === 'test' ? {
    css: 'css-loader',
    scss: `css-loader!sass-loader?${JSON.stringify(sassOptions)}`
  } : {
    css: ExtractTextPlugin.extract(`${nullLoader}css-loader`),
    scss: ExtractTextPlugin.extract(
      `${nullLoader}css-loader!sass-loader?${JSON.stringify(sassOptions)}`
    )
  }

// style.js
exports.processStyle = processStyle
