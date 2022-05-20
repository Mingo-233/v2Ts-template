import http from "@/service/http";
import * as T from "./types";

const loginApi: T.ILoginApi = {
  login(params) {
    return http.post("/users/accountLogin", params);
  },
  check(params) {
    return http.get("/users/check", params);
  },
};
export default loginApi;
