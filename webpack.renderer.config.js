const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      ...rules,
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  },
  plugins: [
    ...plugins,
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'assets'), to: 'assets' },
      ]
    }),
    // new CopyWebpackPlugin({
    //   patterns: ['assets'].map((asset) => [{ from: path.resolve(__dirname, 'src', asset), to: asset }])
    // })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
};
