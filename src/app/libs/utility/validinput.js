
export function emailValid(str){
    if (typeof str !== 'string') return false
    let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(str);
}

export function userNameValid(str){
    if (typeof str !== 'string') return false
    let pattern  = /[^0-9a-zA-Z_]/g
    return !pattern.test(str)
}