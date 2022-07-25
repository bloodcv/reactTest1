const path = require("path");

const {
  override,
  addWebpackAlias,
  fixBabelImports,
  addLessLoader,
  adjustStyleLoaders,
} = require("customize-cra");
const themeColor = require("./theme-color-config");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  //使用less-loader对源码中的less的变量进行重新指定
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { ...themeColor },
    },
  }),
  // fix postcssOptions报错
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  })
);
