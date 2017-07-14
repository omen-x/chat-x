const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const notifier = require('node-notifier');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const { ifProduction } = getIfUtils(process.env.NODE_ENV);

const config = {
  entry: removeEmpty({
    // vendor: ['lodash'],
    'js/app': './client/index.js'
  }),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.sass'],
    alias: {
      client: path.resolve(__dirname, 'client'),
      cssVars: path.resolve(__dirname, 'client/App/styles/partials/_vars.sass'),
      decor: path.resolve(__dirname, 'client/App/img/decor'),
      icons: path.resolve(__dirname, 'client/App/img/icons')
    }
  },
  module: {
    rules: [
    {
      test: /\.html$/,
      loaders: ['html-loader?minimize=false']
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/
    },
    {
      test: /\.css$/,
      use: ifProduction(
        ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
          {
            loader: 'css-loader',
            options: {
              importLoader: 1,
              sourceMap: true,
              modules: true,
              // localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          ],
          publicPath: '../'
        }),
        [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoader: 1,
              sourceMap: true,
              modules: true,
              // localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ]
      )
    },
    {
      test: /\.(sass|scss)$/,
      use: ifProduction(
        ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
          {
            loader: 'css-loader',
            options: {
              importLoader: 1,
              sourceMap: true,
              modules: true,
              // localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { includePaths: ['./client'], sourceMap: true } }
          ],
          publicPath: '../'
        }),
        [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              // localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { includePaths: ['./client'], sourceMap: true } }
        ]
      )
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
      'file-loader?name=[name].[ext]&outputPath=img/'
      ]
    },
    {
      test: /\.svg$/,
      use: [
      { loader: 'file-loader?name=[name].[ext]&outputPath=img/' }
      ]
    }
    ]
  },
  plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    },
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'public/index.html',
    favicon: 'client/App/img/favicon/favicon.ico',
    minify: false
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
        sound: false
      });
    }
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
  ],
};


// PRODUCTION
if (process.env.NODE_ENV === 'production') {
  const prodPlugins = [
  new ExtractTextPlugin({
    filename: 'css/app.css',
    allChunks: true
  }),
  new UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true },
      compress: { screw_ie8: true, warnings: false },
      comments: false
  }),
  new CleanWebpackPlugin(['dist', './dist.zip'], {
    verbose: false,
    dry: false
  }),
  new ImageminPlugin({
    svgo: { removeViewBox: false },
    plugins: [
    imageminMozjpeg(),
    imageminPngquant({ verbose: true })
    ]
  })
  ];

  config.plugins.push(...prodPlugins);


// DEVELOPMENT
} else {
  config.devServer = {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    publicPath: '/',
    compress: true,
    historyApiFallback: true, // problem with nested routes
    proxy: {
      '/api/*': 'http://localhost:8080',
      '/socket.io/*': 'http://localhost:8080'
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
    }
  };
}


module.exports = config;
