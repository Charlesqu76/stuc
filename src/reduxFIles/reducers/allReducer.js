import {
    LOGIN,
    LOGOUT,
} from '../actionConst';
import {isLogin}  from '../../utility.js';


const logInit = isLogin() ? true :false;
export const logReducer = function (state = logInit, action) {
    switch (action.type) {
        case LOGIN:
            console.log(state);
            return state = true;
        case LOGOUT:
            console.log(state);
            return state = false;
        default:
            return state;
    }
}


