/**
 * External Dependencies
 */
const Webpack            = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')

// CSS loader
const cssExtractTextPlugin = new ExtractTextPlugin({
  filename: './build/style.css'
})

// Configuration for the ExtractTextPlugin.
const extractConfig = {
  use: [
    { loader: 'raw-loader' },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [require('autoprefixer')]
      }
    },
    {
      loader: 'sass-loader'
    },
  ],
}

// Webpack config
const config = {
  entry: './src/index.js',
  externals: {
    'react':  'React',
    'lodash': 'lodash',
    '@wordpress/components': {
      global: ['wp', 'components'],
    },
  },
  output: {
    filename: 'build/index.js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /style\.s?css$/,
        use: cssExtractTextPlugin.extract(extractConfig),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    cssExtractTextPlugin,
  ],
  stats: {
    children: false,
    colors: true,
  },
}

module.exports = config
