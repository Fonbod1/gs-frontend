const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      tty: require.resolve('tty-browserify')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
