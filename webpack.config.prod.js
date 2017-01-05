var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        exclude: [/(node_modules|bower_components)/, /\.test\.jsx?$/],
        query: {
          presets: ['airbnb', 'react', 'es2015', 'stage-0']
        },
        plugins: ['transform-object-rest-spread'],
      },
      { test: /\.woff2?$/,      loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,         loader: "file-loader" },
      { test: /\.eot$/,         loader: "file-loader" },
      { test: /\.svg$/,         loader: "file-loader" },
      { test: /\.(png|gif)$/,   loader: "file-loader" },
      { test: /\.(sass|scss)$/, loader: 'style!css!sass'},
      { test: /\.json$/,        loader: "json-loader"}
    ]
  }
};
