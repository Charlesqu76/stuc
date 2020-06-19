import {
    LOGIN,
    LOGOUT,
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
