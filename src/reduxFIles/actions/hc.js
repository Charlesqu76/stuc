import {
    ADDLIKE,
    CANCELLIKE,
} from '../actionConst';

export const addHcLike = (likeUser) => {
    return {
        type: ADDLIKE,
        payload: likeUser,
    }
};

export const cancelHcLIke = (likeUser) => {
    return {
        type: CANCELLIKE,
        payload: likeUser,

    }
};