const path = require('path');

module.exports = (env, argv) => {
  const { mode } = argv;

  return {
    devtool: 'development' === mode
      ? 'cheap-module-eval-source-map'
      : 'source-map',
    entry: {
      index: path.join(__dirname, 'src/assets/javascript', 'index.js'),
    },
    output: {
      path: path.join(__dirname, 'static/javascript'),
      filename: '[name].compiled.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true,
              }
            }
          ],
        },
      ]
    },
  };
};
