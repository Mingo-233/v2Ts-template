const { defineConfig } = require("@vue/cli-service");
const isProduction = process.env.NODE_ENV === "production";
const path = require("path");
const webpack = require("webpack");

module.exports = defineConfig({
  // 是否对所有的依赖都进行babel转译
  transpileDependencies: false,
  productionSourceMap: !isProduction,
  parallel: true,
  // publicPath: isProduction
  //   ? "https://yun.baoxiaohe.com/static/cdn/share/"
  //   : "/",
  // assetsDir: isProduction ? (isProduction ? "static/mobile/cdn/v2" : "v2") : "",

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    port: 3200,
    // host: "localhost",
    // open: true,
    proxy: {
      "/api/v2": {
        changeOrigin: true,
        target: `https://${process.env.NODE_SITE}.${process.env.NODE_SERVER}`,
        cookieDomainRewrite: {
          ".baoxiaohe.fun": !isProduction ? "localhost" : "baoxiaohe.com",
          ".baoxiaohe.com": !isProduction ? "localhost" : "baoxiaohe.com",
        },
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/style/index.less")],
    },
  },
  configureWebpack: (config) => {
    if (isProduction) {
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 6,
        })
      );
    }
  },
});
