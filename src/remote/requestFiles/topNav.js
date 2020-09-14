import axios from "axios";
axios.defaults.headers["token"] = localStorage.getItem("token");
import { baseUrl } from "../constVar.js";


export function topNavVer(fun){
    axios
      .post(baseUrl + "/signin/vertificationLog", {token: localStorage.getItem("token")})
      .then((res) => {
          fun(res)
      })
      .catch((e) => console.log(e));
}
