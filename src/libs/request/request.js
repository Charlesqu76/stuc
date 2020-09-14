import axios from 'axios'

function Request() {
    this.baseUrl = 'http://127.0.0.1:8000'

}

Request.prototype.get = function (path, param) {
    axios.get({
        url: `${this.baseUrl}${path}`,
        param: param,
        timeout: 8000,
    }).then((res) => res.data)
}

Request.prototype.post = function (path, param) {
    axios.post({
        url: `${this.baseUrl}${path}`,
        param: param,
        timeout: 8000,
    }).then((res) => res.data)
}

export const request = new Request()