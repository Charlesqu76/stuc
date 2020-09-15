import React, { Fragment, useState, useRef, useEffect } from "react";
import "./hcCmt.css";
import cmtIcon from "../../../../static/cmtIcon.svg";
import { baseUrl } from "../../../../constVar.js";
import { findId } from "../../../../utility.js";
import HcCmtPost from "../hcCmtInput/hcCmtInput.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cmtList: state.hcDetail.huche_Comment,
  };
};

export default connect(mapStateToProps, null)(HcCmtListCon);
//循环评论
function HcCmtListCon(props) {
  const { cmtList } = props;
  const NewList = [];
  for (let cmt of cmtList) {
    if (!cmt.parentComment) {
      const superSubCmt = {};
      superSubCmt.sup = cmt;
      let subList = [];
      for (let cmt1 of cmtList) {
        if (cmt1.parentComment && cmt1.parentComment.id === cmt.id) {
          subList.push(cmt1);
        }
      }
      superSubCmt.sub = subList;
      NewList.push(superSubCmt);
    }
  }
  return (
    <Fragment>
      {cmtList.length ? (
        <div className="componCon cmtCon">
          {NewList.map((value) => {
            return (
              <HcCmt key={value.sup.id} value={value.sup} subCmt={value.sub} />
            );
          })}
        </div>
      ) : null}
    </Fragment>
  );
}

//一级评论容器
function HcCmt(props) {
  const [showCmt, setShowCmt] = useState(false);
  const [cmtId, setCmtId] = useState(null);
  const [hcId, setHcId] = useState(null);
  const conRef = useRef(null);
  const { value, subCmt = null, sub = false } = props;

  const showCmtPost = (e) => {
    setCmtId(findId(conRef.current, "HcCmtCon"));
    setHcId(findId(conRef.current, "HcDetailCon"));
    setShowCmt(true);
  };

  const notShowCmtPost = () => {
    setShowCmt(false);
  };


  return (
    <Fragment>
      <div className={sub ? "HcCmtCon HcSubCmtCon" : "HcCmtCon"} id={value.id}>
        <div className="HcCmtUserImgCon">
          <img src={baseUrl + value.commenter.img} className="HcCmtUserImg" />
        </div>
        <div className="HcCmtTextCon">
          <p>{value.content}</p>
          {!sub ? (
            <div
              className="HcCmtTextIconCon"
              onClick={showCmtPost}
              ref={conRef}
            >
              <img src={cmtIcon} width="20px" height="20px" />
            </div>
          ) : null}
        </div>
      </div>
      {showCmt ? (
        <HcCmtPost
          changeList={props.recCmtFun}
          hcId={hcId}
          parCmtId={cmtId}
          cmtIconClick={notShowCmtPost}
        />
      ) : null}
      {subCmt
        ? subCmt.map((value) => {
            return <HcCmt key={value.id} value={value} sub={true} />;
          })
        : null}
    </Fragment>
  );
}
