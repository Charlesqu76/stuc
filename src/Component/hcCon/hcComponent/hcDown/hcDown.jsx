import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./hcDown.css";
import likeIcon from "../../../../static/likeIcon.svg";
import watchIcon from "../../../../static/watchIcon.svg";
import cmtIcon from "../../../../static/cmtIcon.svg";
import { isLogin } from "../../../../utility.js";
import { hcLike, hc } from "../../../../requestFiles/huche.js";
import { connect } from "react-redux";
import { addHcLike } from "../../../../reduxFIles/actions/hc.js";
import HcCmtPost from "../hcCmtInput/hcCmtInput.jsx";
const mapDispatchToPRrops = (dispatch) => {
  return {
    hcLikeHandle: (likeUser) => {
      dispatch(addHcLike(likeUser));
    },
  };
};

const mapStateToProps = (state) => {
  if (state.hcDetail) {
    return {
      hcId: state.hcDetail.id,
    };
  } else {
    return { hcId: null };
  }
};
export default connect(mapStateToProps, mapDispatchToPRrops)(HcDown);

function HcDown(props) {
  const [showCmt, setShowCmt] = useState(false);
  const history = useHistory();
  const handleClickLike = () => {
    let token = isLogin();
    if (token) {
      let id = token.split(".?")[0];
      let data = new FormData();
      data.append("hucheId", props.hcId);
      data.append("userId", id);
      hcLike(data, (value) => {
        // console.log(value);
        props.hcLikeHandle(value.data.like);
        // props.recLikeFun(value.data.like);
      });
    } else {
      history.push("/login");
    }
  };
  const showCmtPost = () => {
    setShowCmt(true);
  };

  const notShowCmtPost = () => {
    setShowCmt(false);
  };

  return (
    <div className="componCon">
      <div className="HcDownCon ">
        {props.detail ? (
          <>
            <div className="HcDownIconCon">
              <div className="HcIconCon HcLikeIcon" onClick={handleClickLike}>
                <img src={likeIcon} className="HcIcon" />
              </div>
              <div className="HcIconCon " onClick={showCmtPost}>
                <img src={cmtIcon} className="HcIcon" />
              </div>
            </div>
            {showCmt ? <HcCmtPost cmtIconClick={notShowCmtPost} /> : null}
          </>
        ) : (
          <div className="HcDownIconCon">
            <div className="HcIconCon ">
              <img src={watchIcon} className="HcIcon" />
              <a>{props.watch}</a>
            </div>
            <div className="HcIconCon HcLikeIcon">
              <img src={likeIcon} className="HcIcon" />
              <a>{props.hcLikeLen}</a>
            </div>
            <div className="HcIconCon ">
              <img src={cmtIcon} className="HcIcon" />
              <a>{props.hcCommentLen}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
