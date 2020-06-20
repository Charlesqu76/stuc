import React, { Fragment, useState, useEffect } from "react";
import "./hcCon.css";
import MediaCon from "../photoCon/mediaCon.jsx";
import { useHistory } from "react-router";
import likeIcon from "../../static/likeIcon.svg";
import watchIcon from "../../static/watchIcon.svg";
import cmtIcon from "../../static/cmtIcon.svg";
import { baseUrl } from "../../constVar.js";
import { converStrToDate } from "../../utility.js";

export default Hc;
function Hc(props) {
  let { data } = props;
  let history = useHistory();
  let detailClick = () => {
    let id = data.id;
    let url = `/huche/${id}`;
    history.push(url);
  };
  return (
    <div className="HcCon" id={data.id} onClick={detailClick}>
      <HcHead data={data.user} time={data.time} />
      <HcBodyCon cmt={data.content} media={data.media} />
      <HcDown
        id={data.id}
        hcLikeLen={data.huche_like}
        hcCommentLen={data.huche_Comment}
        watch={data.watch}
      />
    </div>
  );
}

function HcHead(props) {
  return (
    <div className="HcHeadCon componCon">
      <div className="HcHeadImgCon">
        <img
          src={baseUrl + props.data.img}
          className="HcHeadImg"
        />
      </div>
      <div className="HcHeadNTCon">
        <a className="HcHeadName">{props.data.name}</a>
        <a className="HcHeadTime">{converStrToDate(props.time)}</a>
      </div>
    </div>
  );
}

function HcBodyCon(props) {
  return (
    <div className="HcBodyCon componCon">
      {props.cmt && <p>{props.cmt}</p>}
      {props.media.length !== 0 && (
        <MediaCon media={props.media} baseUrl={baseUrl} />
      )}
    </div>
  );
}

class HcDown extends React.Component {
  constructor() {
    super();
    this.state = {
      cmtShow: false,
      cmt: null,
    };
  }

  clickHandle = () => {
    this.setState({ cmtShow: true });
  };
  subClickHandle = () => {
    this.setState({ cmtShow: false });
    console.log("adf");
    this.setState({ cmt: null });
    this.props.recCmtFun(this.state.cmt);
    // let id = localStorage.getItem("token").split(".?")[0];
    // let data = new FormData();
    // data.append("cmt", this.state.cmt);
    // data.append("userId", id);
    // data.append("hucheId", this.props.id);
    // hcCmt(data);
  };
  handleClickLike = () => {
    let id = localStorage.getItem("token").split(".?")[0];
    let data = new FormData();
    data.append("hucheId", this.props.id);
    data.append("userId", id);
    hcLike(data, (value) => {
      this.props.recLikeFun(value.data.like);
    });
  };
  handleCmtChange = (e) => {
    this.setState({ cmt: e.target.value });
  };

  render() {
    return (
      <>
        <div className="HcDownCon componCon">
          <div className="HcIconCon ">
            <img src={watchIcon} className="HcIcon" />
            <a>{this.props.watch ? this.props.watch : null}</a>
          </div>

          <div className="HcIconCon HcLikeIcon" onClick={this.handleClickLike}>
            <img src={likeIcon} className="HcIcon" />
            <a>{this.props.hcLikeLen ? this.props.hcLikeLen : null}</a>
          </div>
          <div className="HcIconCon " onClick={this.clickHandle}>
            <img src={cmtIcon} className="HcIcon" />
            <a>{this.props.hcCommentLen ? this.props.hcCommentLen : null}</a>
          </div>
        </div>
        {this.state.cmtShow && (
          <div className="SubCmtCon componCon">
            <textarea
              className="SubCmtInput"
              value={this.state.cmt}
              onChange={this.handleCmtChange}
            />
            <button className="SubCmtBtn" onClick={this.subClickHandle}>
              发表
            </button>
          </div>
        )}
      </>
    );
  }
}
