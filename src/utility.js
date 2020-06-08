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

