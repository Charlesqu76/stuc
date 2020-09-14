import axios from 'axios';
import {
    baseUrl
} from '../constVar.js';


//请求user数据
export function getUserData(fun) {
    let url = `${baseUrl}/manage/user`;
    axios.get(url)
        .then(
            (res) => fun(res)
        )
};

export function getHcData(fun) {
    let url = `${baseUrl}/manage/hc`;
    axios.get(url)
        .then(
            (res) => fun(res)
        )
};


export function delHcData(data,fun){
    let url = `${baseUrl}/manage/hc/del/`;
    axios.post(url,data)
        .then(
            (res) => fun(res)
        )
}

