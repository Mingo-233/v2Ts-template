<template>
  <div>this is demo2</div>
</template>

<script lang="ts">
import { getLang } from "@/utils/common";
import Vue from "vue";
export default Vue.extend({
  name: "",
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    getLang();
  },
  methods: {},
});
</script>

<style scoped lang="less"></style>
