const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const { removeEmpty } = require('webpack-config-utils');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');


const config = {
  entry: removeEmpty({
    'js/app': ['whatwg-fetch', 'core-js/fn/promise', './client/index.js'],
  }),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.sass'],
    alias: {
      helpers: path.resolve(__dirname, 'client/App/helpers'),
      cssVars: path.resolve(__dirname, 'client/App/styles/partials/_vars.sass'),
      decor: path.resolve(__dirname, 'client/App/img/decor'),
      icons: path.resolve(__dirname, 'client/App/img/icons'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loaders: ['html-loader?minimize=false'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'sass-loader',
            options: { includePaths: ['./client'], sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader?name=[name].[ext]&outputPath=img/'],
      },
      {
        test: /\.svg$/,
        use: [{ loader: 'file-loader?name=[name].[ext]&outputPath=img/' }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      favicon: 'client/App/img/favicon/favicon.ico',
      minify: false,
    }),
    // new LodashModuleReplacementPlugin(),
    // extracts and splits vendor chunks into a separate file
    // new CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'js/vendor.js',
    //   minChunks: Infinity
    // }),
    new FriendlyErrorsWebpackPlugin({
      onErrors: (severity, errors) => {
        if (severity !== 'error') return;
        const error = errors[0];
        notifier.notify({
          title: 'Building error',
          message: error.message,
          subtitle: error.file || '',
          sound: false,
        });
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    publicPath: '/',
    compress: true,
    historyApiFallback: true, // problem with nested routes
    proxy: {
      '/api/*': 'http://localhost:8080',
      '/auth/*': 'http://localhost:8080',
      '/socket.io/*': 'http://localhost:8080',
    },
    stats: {
      assetsSort: 'size',
      assets: false,
      children: false,
      publicPath: false,
      chunks: false,
      hash: false,
      colors: true,
      version: false,
    },
  },
};

module.exports = config;
