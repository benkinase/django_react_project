const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public", //serves index.html in this dir
    // contentBase: resolveAppPath('public'),
    publicPath: "/",
    host: process.env.Host || "localhost",
    historyApiFallback: true,
    inline: true,
    port: process.env.PORT || 3000,
    hot: true, // Enable hot reloading. aka HotModuleReplacement
    open: true,
    quiet: true,
    noInfo: false,
    //stats: "minimal",
    stats: { colors: true },
    compress: true,
    // proxy: {
    //   "/api": {
    //     target: "http://127.0.0.1:8000",
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
  },
});
