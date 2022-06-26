/* eslint-disable vue/order-in-components */
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <a-button type="primary" @click="axios"> 发送一个请求 </a-button>
    <h1>vuex数据： {{ Visible }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { mapState } from "vuex";

export default Vue.extend({
  name: "HomeView",
  components: {
    HelloWorld,
  },

  data() {
    return {
      Visible2: "",
    };
  },
  computed: {
    ...mapState("example", ["Visible"]),
  },

  methods: {
    axios() {
      console.log("zhushi");

      // 这是一条注释 我会删除它
      // this.$api.getAaPage({ name: "aa" });
      // console.log(this.$api);
      // this.$api.login({ name: "aa" });
    },
  },
});
</script>
<style lang="less" scoped>
.home {
  h1 {
    color: green;
  }
  // text-align: center;
}
</style>
