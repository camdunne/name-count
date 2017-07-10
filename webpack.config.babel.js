import { resolve, join } from 'path';

export default () => ({
  entry: './client/client.jsx',
  output: {
    path: resolve('public/build'),
    filename: 'bundle.js',
    publicPath: 'public/build/',
    pathinfo: true,
  },
  devtool: 'source-map',
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    modules: [
      join(__dirname, 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['stage-2'],
          plugins: ['transform-decorators-legacy'],
        },
      },
      {
        test: /\.(xml)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
});
