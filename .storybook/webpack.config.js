
const urlLoader = 'url-loader?limit=10000&name=[name].[ext]';

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.(gif|png|eot|ttf|svg)(\?.*)?$/, loader: urlLoader },
      { test: /\.woff2?(\?.*)?$/,
        loader: `${urlLoader}&mimetype=application/font-woff` },
    ],
  },
};
