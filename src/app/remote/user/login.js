import {
    request
} from 'app/libs/request/request'


export const requestUserLogin = {
    remote:  function (pararm) {
        return request.post('signin/login/', pararm)
    }
}