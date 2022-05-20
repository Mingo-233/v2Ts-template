<template>
  <div>
    <h1>demo page</h1>
    <a-button type="primary" @click="check"> 获取个人信息 </a-button>
    <a-button type="primary" @click="login"> 登陆 </a-button>
  </div>
</template>

<script>
export default {
  name: "DemoA",
  data() {
    return {
      msg: "",
    };
  },
  // mounted() {},
  methods: {
    async check() {
      const res = await this.$api.check();
      // this.$api.getAaPage
      this.$api.login;
    },
    async login() {
      const res = await this.$api.login({
        account: "15068722878",
        password: "wbt981023",
        platform: "pc",
      });
      // console.log(res);
    },
  },
};
</script>

<style scoped lang="less">
// @bxh-color: #fd8a43;

h1 {
  color: @bxh-color;
}
</style>
