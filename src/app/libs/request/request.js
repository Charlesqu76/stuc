// import axios from 'axios'
import {
    message
} from 'antd'

export const request = {
    baseUrl: 'http://127.0.0.1:8000/',

    get: async function (path) {
        let data = null
        await fetch(`${this.baseUrl}${path}`, {
                method: 'GET',
                credentials: 'include',
                cache: 'no-cache',
                mode: 'cors',
            }).then(res =>
                res.json()
            ).catch(e => console.error(e))
            .then(res => data = res)
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
                credentials: 'include',
                cache: 'no-cache',
                mode: 'cors',
            }).then((res) => {
                console.log(res.ok)
                if (res.ok) {
                    return res.json()
                } else {
                    message.error('sd')
                    throw new Error('Network response was not ok.');
                }
            })
            .catch((e) => message.error(e))
            .then(res => data = res)
        return data
    }
}