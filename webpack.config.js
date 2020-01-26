const path = require('path');

module.exports = {
  entry: './ts/index.ts',
  mode: 'development', // Loads from Default location src/main.js
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'], //so import,export of local ts file work
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // options: {
        //   presets: ['@babel/preset-env'],
        // },
      },
    ],
  },
};
