const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'index'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.join(__dirname, 'node_modules'),
        ],
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
};
