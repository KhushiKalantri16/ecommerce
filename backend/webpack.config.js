const path = require('path');

module.exports = {
  mode: 'development',
  entry: './server.js',  // Adjust this path according to your entry file
  output: {
    filename: 'bundle.js',  // Output filename
    path: path.resolve(__dirname, 'dist'),  // Output folder
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Process JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader',  // Make sure you have Babel installed
      },
      // Add any other rules for other file types like CSS, images, etc.
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Adjust based on the file types you are using
  },
  devtool: 'source-map',  // Enable source maps for debugging
};
