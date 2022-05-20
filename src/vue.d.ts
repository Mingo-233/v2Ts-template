import { ApiContainer } from "@/service/api/index";
declare module "vue/types/vue" {
  interface Vue {
    $api: typeof ApiContainer;
  }
}
