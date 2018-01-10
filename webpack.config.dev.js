const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  entry: {
    build: path.join(__dirname, 'demos/demo1/src')
  },
  output: {
    path: path.join(__dirname, 'demos/demo1/dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './demos/template.html',
    }),
    // new CopyWebpackPlugin([
    //   {
    //     context: 'demos/demo3',
    //     from: 'src/imgs',
    //     to: 'imgs'
    //   },
    // ]),
  ],
  devtool: "source-map",
};