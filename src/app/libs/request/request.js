import axios from 'axios'

function Request() {
    this.baseUrl = 'http://127.0.0.1:8000/'

}

Request.prototype.get = async function (path, param) {
    let data = null
    await axios({
        method: 'GET',
        url: `${this.baseUrl}${path}`,
        param: param,
        timeout: 8000,
    }).then((res) => {
        data = res.data
    })
    return data
}

Request.prototype.post = async function (path, param) {
    let data = null
    await axios({
        method: 'POST',
        url: `${this.baseUrl}${path}`,
        param: param,
        timeout: 8000,
    }).then((res) => {
        data = res.data
    })
    return data
}

export const request = new Request()