const path = require('path')

module.exports = {
  target: 'node',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, 'src')],
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  externals: {
    'prop-types': 'prop-types',
    react: 'react',
    'react-dom': 'react-dom',
    'react-helmet': 'react-helmet'
  },
  plugins: []
}
