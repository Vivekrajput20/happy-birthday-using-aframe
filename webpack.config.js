/* eslint-disable implicit-arrow-linebreak */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { index: './src/index.js' },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            sources: true,
            preprocessor: (content) =>
              content.replace(/\/src\/assets\/models\//g, '/assets/models/'),
            minimize: true,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Happy Birthday',
      template: path.resolve(__dirname, 'index.html'),
      inject: 'head',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/models'),
          to: path.resolve(__dirname, 'dist/assets/models'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/videos'),
          to: path.resolve(__dirname, 'dist/assets/videos'),
        },
        {
          from: path.resolve(__dirname, 'favicon.ico'),
          to: path.resolve(__dirname, 'dist/favicon.ico'),
        },
      ],
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    stats: {
      colors: true,
    },
    publicPath: '/',
    compress: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    writeToDisk: true,
    progress: true,
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: true,
    hot: true,
  },
  optimization: {
    minimize: true,
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
