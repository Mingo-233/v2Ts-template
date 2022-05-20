import http from "@/service/http";
import * as T from "./types";

const _3dshowApi: T.I_exampleApi = {
  getAaPage(params) {
    return http.get("/templates/ctree", params);
  },
};
export default _3dshowApi;
