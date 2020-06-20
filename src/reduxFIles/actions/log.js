import {
    LOGIN,
    LOGOUT,
    ADDLIKE,
    CANCELLIKE,
} from '../actionConst';
export const logIn = () => {
    return {
        type: LOGIN
    }
};
export const logOut = () => {
    return {
        type: LOGOUT
    }
};
