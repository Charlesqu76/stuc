// 转换时间
export let converStrToDate = (strDate) => {
  strDate = new Date(strDate.replace(/(\..*)/g, "")).getTime();
  let date = new Date().getTime();
  let second = (date - strDate) / 1000;
  let str = "";
  if (Math.abs(second / 60) < 1) {
    str = second + "秒前";
  } else if (Math.abs(second / 60 / 60) < 1) {
    str = Math.round(second / 60) + "分前";
  } else if (Math.abs(second / 60 / 60 / 24) < 1) {
    str = Math.round(second / 60 / 60) + "小时前";
  } else if (Math.abs(second / 60 / 60 / 24 / 30) < 1) {
    str = Math.round(second / 60 / 60 / 24) + "天前";
  } else if (Math.abs(second / 60 / 60 / 24 / 30 / 12) < 1) {
    str = Math.round(second / 60 / 60 / 24 / 30) + "月前";
  }
  return str;
};

//判断是否是窗口内
export function eleIsVisiable(ele, partiallyVisible = true) {
  const {
    top,
    left,
    bottom,
    right
  } = ele.getBoundingClientRect();
  const {
    innerHeight,
    innerWidth
  } = window;
  return partiallyVisible ?
    ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
    top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

//是否登陆
export function isLogin() {
  const token = localStorage.getItem('token');
  return token ? token : false;
}

//防抖
export const debound = (fun, delay) => {
  let timeout = null;
  return function (args) {
    let that = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    setTimeout(() => {
      fun.call(that, args)
    }, delay);
  }
}



//格式检查
export function checkType(type, checkData) {
  if (type === 'email') {
    let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(checkData);
  }
}