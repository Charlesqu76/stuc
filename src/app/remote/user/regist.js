import {
    request
} from 'app/libs/request/request'


export const requestUserRegist = {
    remote: function (param) {
        return request.post('signin/regist/', param)
    }
}