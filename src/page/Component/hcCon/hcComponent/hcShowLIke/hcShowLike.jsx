import React from "react";
import "./hcShowLike.css";
import likeIconActive from "../../../../static/likeIconActive.svg";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    hcLikeList: state.hcDetail.huche_like,
  };
};

export default connect(mapStateToProps, null)(LikeCon);

function LikeCon(props) {
  return (
    <>
      {props.hcLikeList.length !== 0 && (
        <div className="LikeShowCon componCon">
          <div className="likeShowIconCon HcIcon">
            <img src={likeIconActive} />
          </div>
          {props.hcLikeList.map((value) => (
            <a key={value.user.id} className="likeShowName">
              {value.user.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
