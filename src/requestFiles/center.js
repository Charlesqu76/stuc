import axios from 'axios';
import {
    baseUrl
} from '../constVar.js';


export const getUserInfo = (id, fun) => {
    const url = `${baseUrl}/center/${id}/getInfo`
    axios
    .get(url)
    .then((value) => fun(value))
    .catch(e => console.log(e))
}


export function getCenHc(id, fun) {
    const url = `${baseUrl}/center/${id}/hc`
    axios
    .get(url)
    .then((value) => fun(value))
    .catch(e => console.log(e))
}


export const changeNameFun = (data, fun) => {
    const url = `${baseUrl}/center/changeName`;
    axios
    .post(url, data)
    .then(value => fun(value))
    .catch(e => console.log(e))

}