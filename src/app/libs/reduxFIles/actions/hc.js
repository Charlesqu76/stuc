import {
    ADDDETAILHC,
    ADDLIKE,
    ADDCMT,
    
} from '../actionConst';


export const addDetail = (hcData) => {
    return {
        type: ADDDETAILHC,
        payload: hcData,

    }
};

export const addHcLike = (likeUser) => {
    return {
        type: ADDLIKE,
        payload: likeUser,
    }
};




export const addCmt = (cmtInfo) => {
    return {
        type: ADDCMT,
        payload: cmtInfo,

    }
};