import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import example from "./modules/example";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    example,
  },
});
