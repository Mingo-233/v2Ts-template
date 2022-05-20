import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ApiContainer } from "@/service/api/index";

// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
// Vue.use(Antd);

import { Button } from "ant-design-vue";
Vue.use(Button);
Vue.config.productionTip = false;
const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

Vue.prototype.$api = ApiContainer;

app.$mount("#app");
