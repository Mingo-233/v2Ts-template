interface stateT {
  Visible: string;
  aa: string;
}
import { Commit } from "vuex";
const state: stateT = {
  Visible: "222",
  aa: "22",
};

export default {
  namespaced: true,
  state,
  mutations: {
    popHistory(state: stateT, payload: string) {
      state.Visible = payload;
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
