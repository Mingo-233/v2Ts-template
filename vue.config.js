const { defineConfig } = require("@vue/cli-service");
const isProduction = process.env.NODE_ENV === "production";
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
console.log(process.env.npm_config_report);
module.exports = defineConfig({
  // 是否对所有的依赖都进行babel转译
  transpileDependencies: false,
  productionSourceMap: !isProduction,
  parallel: true,
  // publicPath: isProduction
  //   ? "https://yun.baoxiaohe.com/static/cdn/share/"
  //   : "/",
  // assetsDir: isProduction ? (isProduction ? "static/mobile/cdn/v2" : "v2") : "",
  publicPath: "./",
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

  chainWebpack: (config) => {
    config.optimization.splitChunks({
      chunks: "all", // async异步代码分割 initial同步代码分割 all同步异步分割都开启
      minSize: 10, // 字节b 引入的文件大于30kb才进行分割
      // minSize: 30000, // 字节b 引入的文件大于30kb才进行分割
      // maxSize: 50000,         //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
      minChunks: 2, // 模块至少使用次数
      maxAsyncRequests: 5, // 同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
      maxInitialRequests: 3, // 首页加载的时候引入的文件最多3个
      automaticNameDelimiter: "~", // 缓存组和生成文件名称之间的连接符
      name: false, // 缓存组里面的filename生效，覆盖默认命名
      cacheGroups: {
        // 缓存组，将所有加载模块放在缓存里面一起分割打包
        vendors: {
          // 自定义打包模块
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 优先级，先打包到哪个组里面，值越大，优先级越高
          // filename: "[name]v.js",
          filename: `app-chunk-vendors`,
        },
        default: {
          // 默认打包模块
          priority: -20,
          reuseExistingChunk: true, // 模块嵌套引入时，判断是否复用已经被打包的模块
          filename: "[name].js",
        },
      },
    });
  },
  configureWebpack: (config) => {
    config.output.filename = "js/[name].[chunkhash:6].js";
    config.output.chunkFilename = "js/chunk-[name].[chunkhash:4].js";
    if (isProduction) {
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 6,
        })
      );
      config.plugins.push(
        new TerserPlugin({
          extractComments: false, //是否将注释剥离到单独的文件中
          terserOptions: {
            format: {
              comments: false,
              // （默认"some"）——默认情况下，它保留包含“@license”、“@copyright”、“@preserve”的 JSDoc 样式的注释，或者以!、传递true 或"all"保留所有注释，false在输出中省略注释，正则表达式字符串（例如/^!/）或函数。
            },
            // 自动删除console
            compress: {
              // warnings: false, // 若打包错误，则注释这行
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ["getLang"], //删除特定函数调用 (没生效。。)
            },
          },
          parallel: true,
        })
      );
    }
  },
});
