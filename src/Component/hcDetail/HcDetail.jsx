import React, { useState, useEffect } from "react";
import "./hcDetail.css";

import HcHead from '../hcCon/hcComponent/hcHead/hcHead.jsx';
import HcBodyCon from '../hcCon/hcComponent/hcBody/hcBody.jsx';
import HcDown from '../hcCon/hcComponent/hcDown/hcDown.jsx';
import LikeCon from '../hcCon/hcComponent/hcShowLIke/hcShowLike.jsx';
import HcCmtListCon from '../hcCon/hcComponent/hcCmt/hcCmt.jsx';

export default HcDetail;
function HcDetail(props) {

  let { data } = props;

  return (
    <div className="HcDetailCon" id={data.id}>
      <HcHead data={data.user} time={data.createTime} />
      <HcBodyCon cmt={data.content} media={data.media} />
      <HcDown detail = {true}/>
      <LikeCon />
      <HcCmtListCon />
    </div>
  );
}






