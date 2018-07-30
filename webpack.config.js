/**
 * External Dependencies
 */
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin  = require("extract-text-webpack-plugin");

// CSS loader
const cssExtractTextPlugin = new ExtractTextPlugin({
  filename: "./build/style.css"
});

// Configuration for the ExtractTextPlugin.
const extractConfig = {
  use: [
    { loader: "raw-loader" },
    {
      loader: "postcss-loader",
      options: {
        plugins: [require("autoprefixer")]
      }
    },
    {
      loader: "sass-loader"
    }
  ]
};

// Externals
const externals = {
  react: {
    commonjs: 'react',
    commonjs2: 'react',
  },
  lodash: {
    commonjs: 'lodash',
    commonjs2: 'lodash',
  }
};

// WordPress dependences
const wpDependencies = [
  "components",
];

wpDependencies.forEach(wpDependency => {
  externals["@wordpress/" + wpDependency] = {
    this: ["wp", wpDependency],
  };
});

// Webpack config
const config = {
  entry: "./src/index.js",
  externals,
  output: {
    filename: "build/index.js",
    path: __dirname,
    library: ["gutenberg-blocks", "[name]"],
    libraryTarget: "umd"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /style\.s?css$/,
        use: cssExtractTextPlugin.extract(extractConfig)
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    cssExtractTextPlugin,
  ],
  stats: {
    children: false
  }
};

module.exports = config;
