import {
    LOGIN,
    LOGOUT,
    ADDLIKE,
    CANCELLIKE,
} from '../actionConst';
import {isLogin}  from '../../utility.js';


const logInit = isLogin() ? true :false;
export const logReducer = function (state = logInit, action) {
    switch (action.type) {
        case LOGIN:
            return state = true;
        case LOGOUT:
            return state = false;
        default:
            return state;
    }
}


export const hcLikeReducer = (state = [], action) => {
    switch (action.type){
        case ADDLIKE:
            console.log(state);
            return [state,action.payload];
        case CANCELLIKE: 
            return [...state];
        default:
            return [...state];
    }
}


