import React, { Fragment } from "react";
import "./hcCon.css";
import MediaCon from "../photoCon/mediaCon.jsx";
import axios from "axios";
import { withRouter } from "react-router";
import likeIcon from "../../static/likeIcon.svg";
import likeIconActive from "../../static/likeIconActive.svg";
import watchIcon from "../../static/watchIcon.svg";
import cmtIcon from "../../static/cmtIcon.svg";
import { baseUrl } from "../../constVar.js";
import { hcLike, hcCmt } from "../../requestFiles/huche.js";

export default class Hc extends React.Component {
  constructor() {
    super();
  }
  detailClick = () => {
    let id = this.props.data.id;
    let url = `/huche/${id}`;
    this.props.history.push(url);
  };

  render() {
    let data = this.props.data;
    return (
      <div
        className="HcCon"
        id={data.id}
        onClick={this.props.detail ? null : this.detailClick}
      >
        <HcHead data={data.user} time={data.time} />
        <HcBodyCon cmt={data.content} media={data.media} />
        <HcDown id={data.id} detail={this.props.detail} />
        {this.props.detail ? <LikeCon like={data.huche_like} /> : null}
        {this.props.detail ? <HcCmt cmt={data.huche_Comment} /> : null}
      </div>
    );
  }
}
Hc = withRouter(Hc);

// 转换时间
let converStrToDate = (strDate) => {
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

function HcHead(props) {
  return (
    <div className="HcHeadCon componCon">
      <div className="HcHeadImgCon">
        <img src={baseUrl + props.data.img} className="HcHeadImg" />
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
      cmt: "",
    };
  }

  clickHandle = () => {
    this.setState({ cmtShow: true });
  };
  subClickHandle = () => {
    this.setState({ cmtShow: false });
    let id = localStorage.getItem('token').split('.?')[0];
    let data = new FormData();
    data.append("cmt", this.state.cmt);
    data.append("userId", id);
    data.append("hucheId", this.props.id);
    hcCmt(data);
  };
  handleClickLike = () => {
    let id = localStorage.getItem('token').split('.?')[0];
    let data = new FormData();
    data.append("hucheId", this.props.id);
    data.append("userId", id);
    hcLike(data);
  };
  handleCmtChange = (e) => {
    this.setState({ cmt: e.target.value });
  };

  render() {
    return (
      <>
        <div className="HcDownCon componCon">
          {this.props.detail ? null : (
            <div className="HcIconCon ">
              <img src={watchIcon} className="HcIcon" />
              <a>20</a>
            </div>
          )}

          <div className="HcIconCon HcLikeIcon" onClick={this.handleClickLike}>
            <img src={likeIcon} className="HcIcon" />
            {this.props.detail ? null : <a>20</a>}
          </div>
          <div className="HcIconCon " onClick={this.clickHandle}>
            <img src={cmtIcon} className="HcIcon" />
            {this.props.detail ? null : <a>20</a>}
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

function LikeCon(props) {
  return (
    <Fragment>
      {props.like.length !== 0 && (
        <div className="LikeShowCon componCon">
          <div className="likeShowIconCon HcIcon">
            <img src={likeIconActive} />
          </div>
          {props.like.map((value) => (
            <a key={value.user.id} className="likeShowName">
              {value.user.name}
            </a>
          ))}
        </div>
      )}
    </Fragment>
  );
}

class HcCmt extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let cmtList = this.props.cmt;
    return (
      <Fragment>
        {cmtList.length ? (
          <div className="componCon">
            {cmtList.map((value) => {
              return (
                <div className="HcCmtCon">
                  <div className="HcCmtUserImgCon">
                    <img
                      src={baseUrl + value.commenter.img}
                      className="HcCmtUserImg"
                    />
                  </div>
                  <div className="HcCmtTextCon">
                    <p>{value.content}</p>
                    <div className = 'HcCmtTextIconCon'> 
                      <img src={cmtIcon} width="20px" height="20px" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </Fragment>
    );
  }
}
