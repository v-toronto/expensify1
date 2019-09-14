const path = require('path')

module.exports = {
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  entry: './src/app.js',
  //entry: './src/play/test.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/
    }, {
      test: /\.?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsX']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};