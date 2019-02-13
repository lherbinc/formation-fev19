const path = require('path');

module.exports = {
  externals:[
    /^[a-z\-0-9]+$/  // all modules from node_modules ignored.
  ],
  target:'node',
  mode: 'none',
  entry: './server.ts',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget:'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
};