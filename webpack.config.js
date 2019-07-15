module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './dist/index.js'
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  devtool: "source-map"
}