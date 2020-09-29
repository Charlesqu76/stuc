// import axios from 'axios'
import {
    message
} from 'antd'

export const request = {
    baseUrl: 'http://127.0.0.1:8000/',

    get: async function (path, param) {
        let data = null
        await fetch(`${this.baseUrl}${path}`, {
            method: 'GET',
            credentials: 'include'
        }).then((res) => {
            data = res.data
        })
        return data
    },

    post: async function (path, param) {
        let data = null
        await fetch(`${this.baseUrl}${path}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(param),
            credentials: 'include'
        }).then((res) => {
            console.log(res)
            data = res.data
        }).catch((e) => message.error(e))
        return data
    }
}