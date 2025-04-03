const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your source files
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundled.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use Babel preset-env
          },
        },
      },
    ],
  },
  mode: 'production', // Set mode to production for optimized output
};
