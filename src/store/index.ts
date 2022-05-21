import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// import example from "./modules/example";

// store 模块动态引入 注意文件格式 好处就是不用每个模块都要import引入了
const modulesFiles = require.context("./modules", true, /\.ts$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const pathSplit = modulePath.split(".")[1];
  const pathName = pathSplit.substring(1, pathSplit.length);
  const value = modulesFiles(modulePath);
  return { ...modules, [pathName]: value.default };
}, {});

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
});
