const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public", //serve index.html in this dir
    // contentBase: resolveAppPath('public'),
    // Public path is root of content base
    publicPath: "/",
    host: process.env.Host || "localhost",
    historyApiFallback: true,
    inline: true,
    liveReload: false,
    port: process.env.PORT || 3000,
    hot: true, // Enable hot reloading. HotModuleReplacementPlugin
    open: true,
    //stats: "minimal",
    stats: { colors: true },
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
