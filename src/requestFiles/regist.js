import axios from 'axios';
import {
    baseUrl
} from "../constVar.js";

export const checkEmialExist = (data, fun) => {
    const url = `${baseUrl}/signin/regist/RegistChechEmail`
    axios
        .post(url, data)
        .then((value) => {
            fun(value)
        })
        .catch((e) => console.log(e));
}



export const regPostData = (data, fun) => {
    const url = `${baseUrl}/signin/regist/`
    axios
        .post(url, data)
        .then((res) => {
            fun(res)
        })
        .catch((e) => console.log(e));
}