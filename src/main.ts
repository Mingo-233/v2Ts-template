import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ApiContainer } from "@/service/api/index";
import globalComponents from "@/utils/globalComponents";

Vue.use(globalComponents);
Vue.config.productionTip = false;
const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

Vue.prototype.$api = ApiContainer;

app.$mount("#app");
