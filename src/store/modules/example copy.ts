interface stateT {
  copy: string;
}
import { Commit } from "vuex";
const state: stateT = {
  copy: "ccc",
};

export default {
  namespaced: true,
  state,
  mutations: {
    popHistory(state: stateT, payload: string) {
      state.copy = payload;
    },
  },
  actions: {
    saveVideoCurrent({ commit }: { commit: Commit }, payload: string) {
      commit("popHistory", payload);
    },
    // saveVideoCurrent(context: ActionContext<stateT, unknown>, payload: string) {
    //   context.commit("popHistory", payload);
    // },
  },
  getters: {
    scale(state: stateT) {
      return state;
    },
  },
};
