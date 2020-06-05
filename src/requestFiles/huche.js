import axios from 'axios';
import {baseUrl} from '../constVar.js';

//点赞
export function hcLike(data){
    let postUrl = `${baseUrl}/huche/postHucheLike/`
    axios
      .post(postUrl, data)
      .then((res) => console.log(res))
      .catch((e) => {
        console.error(e);
      });
}
//发表评论
export function hcCmt(data){
    let postUrl = `${baseUrl}/huche/postHucheCmt/`
    axios
      .post(postUrl, data)
      .then((res) => console.log(res))
      .catch((e) => {
        console.error(e);
      });
}

//匿名发布胡扯
export function hc(data, fun){
  let postUrl = `${baseUrl}/huche/postHuche/`;
  
  axios
      .post(postUrl, data)
      .then((res) => {
        fun(res);

      })
      .catch((e) => {
        console.error(e);
      });

}