// 注册第三方组件
import Vue from "vue";
import { Button } from "ant-design-vue";
Vue.use(Button);

// 注册自定义全局组件
import { VueConstructor } from "vue/types/vue";
interface componentsModulesT {
  [propName: string]: object;
}
const modulesFiles = require.context("../components/common/", false, /\.vue$/);
const componentsModules: componentsModulesT = {};
modulesFiles.keys().forEach((path) => {
  if (!path.includes("index")) {
    const value = modulesFiles(path);
    const pathSplit = path.split(".")[1];
    const pathName = pathSplit.substring(1, pathSplit.length);
    componentsModules[pathName] = value.default;
  }
});
const install = function (Vue: VueConstructor) {
  for (const componentName in componentsModules) {
    Vue.component(componentName, componentsModules[componentName]);
  }
};

export default {
  install,
};
