const path = require("path");

module.exports = {
  watch: true,
  entry: "./src/client/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  performance: {
    hints: false,
  },
  devServer: {
    contentBase: "./public",
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: "babel-loader" },
      },

      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
