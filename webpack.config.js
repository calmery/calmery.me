const path = require( 'path' )
const webpack = require( 'webpack' )
const merge = require( 'webpack-merge' )

const MinifyPlugin = require( 'babel-minify-webpack-plugin' )
const CopyWebpackPlugin = require( 'copy-webpack-plugin' )

const resolve = source => path.resolve( __dirname, source )

const entryPath = resolve( 'src/entry.js' )

const common = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js']
  },
  plugins: [new MinifyPlugin()]
}

const frontend = {
  entry: entryPath,
  module: {
    rules: [{
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      use: 'elm-webpack-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }]
    }]
  },
  plugins: [
    new CopyWebpackPlugin( [
      { from: resolve( './src/index.html' ), to: resolve( './dist/index.html' ) },
      { from: resolve( './src/CNAME' ), to: resolve( './dist/' ) },
      { from: resolve( './src/static/img' ), to: resolve( './dist/static/img' ) },
      { from: resolve( './.circleci/config.yml' ), to: resolve( './dist/.circleci/config.yml' ) }
    ] )
  ],
  output: {
    path: resolve( './dist/' ),
    filename: 'elm.js'
  }
}

module.exports = [
  merge( common, frontend )
]
