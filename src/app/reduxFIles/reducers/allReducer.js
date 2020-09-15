import {
    LOGIN,
    LOGOUT,
    ADDDETAILHC,
    ADDLIKE,
    ADDCMT,
} from '../actionConst';
import {
    isLogin
} from '../../utility.js';


const logInit = isLogin() ? true : false;
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


export const hcDetailReducer = (state = null, action) => {
    switch (action.type) {
        case ADDDETAILHC:
            return state = action.payload
        case ADDCMT:
            state.huche_Comment = [...state.huche_Comment, action.payload]
            return Object.assign({},state)
        case ADDLIKE:
            let exist = false;
            let hcLikeList = state.huche_like
            if (action.payload) {
                let index = 0;
                for (let user of hcLikeList) {
                    if (action.payload.id === user.user.id) {
                        exist = true;
                        break;
                    } else {
                        index++;
                    }
                }
                if (exist) {
                    hcLikeList.splice(index, 1);
                    state.huche_like = [...hcLikeList];
                } else {
                    state.huche_like = [...hcLikeList, {
                        user: action.payload
                    }];
                }
            }
            return Object.assign({},state);
        default:
            return state;
    }

}