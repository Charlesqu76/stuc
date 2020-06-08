import React, { Fragment, useState, useEffect } from "react";
import MediaCon from "../photoCon/mediaCon.jsx";
import likeIcon from "../../static/likeIcon.svg";
import likeIconActive from "../../static/likeIconActive.svg";
import cmtIcon from "../../static/cmtIcon.svg";
import defaultUserImg from "../../static/defaultUserImg.svg";
import { baseUrl } from "../../constVar.js";
import { hcLike, hcCmt } from "../../requestFiles/huche.js";
import { converStrToDate } from "../../utility.js";
import "./hcDetail.css";

export default HcDetail;
function HcDetail(props) {
  const [recLike, setRecLike] = useState(null);
  const [hcLikeList, setHcLikeList] = useState([]);
  const [recCmt, setRecCmt] = useState(null);
  const [hcCmtList, setHcCmtList] = useState([]);

  let { data } = props;
  let recCmtFun = (cmt) => {
    setRecCmt(cmt);
  };
  let recLikeFun = (like) => {
    setRecLike(like);
  };
  useEffect(() => {
    setHcLikeList(data.huche_like);
    setHcCmtList(data.huche_Comment);
  }, []);

  useEffect(() => {
    if (recCmt) {
      setHcCmtList([...hcCmtList, recCmt]);
    }
  }, [recCmt]);
  useEffect(() => {
    let exist = false;
    if (recLike) {
      let index = 0;
      for (let user of hcLikeList) {
        if (recLike.id === user.user.id) {
          exist = true;
          break;
        } else {
          index++;
        }
      }
      console.log(exist);
      console.log(index);
      {
        exist
          ? setHcLikeList(hcLikeList.splice(index - 1, 1))
          : setHcLikeList([...hcLikeList, { user: recLike }]);
      }
    }
  }, [recLike]);
  return (
    <div className="HcCon" id={data.id}>
      <HcHead data={data.user} time={data.time} />
      <HcBodyCon cmt={data.content} media={data.media} />
      <HcDown id={data.id} recCmtFun={recCmtFun} recLikeFun={recLikeFun} />
      <LikeCon like={hcLikeList} />
      <HcCmt cmt={hcCmtList} />
    </div>
  );
}

function HcHead(props) {
  return (
    <div className="HcHeadCon componCon">
      <div className="HcHeadImgCon">
        <img
          src={props.data.img ? baseUrl + props.data.img : defaultUserImg}
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
    this.setState({ cmt: null });
    let id = localStorage.getItem("token").split(".?")[0];
    let data = new FormData();
    data.append("cmt", this.state.cmt);
    data.append("userId", id);
    data.append("hucheId", this.props.id);
    hcCmt(data, (value) => {
      this.props.recCmtFun(value.data.data);
    });
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
          <div className="HcIconCon HcLikeIcon" onClick={this.handleClickLike}>
            <img src={likeIcon} className="HcIcon" />
          </div>
          <div className="HcIconCon " onClick={this.clickHandle}>
            <img src={cmtIcon} className="HcIcon" />
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

function HcCmt(props) {
  let cmtList = props.cmt;
  return (
    <Fragment>
      {cmtList.length ? (
        <div className="componCon">
          {cmtList.map((value) => {
            return (
              <div className="HcCmtCon">
                <div className="HcCmtUserImgCon">
                  <img
                    src={
                      value.commenter.img
                        ? baseUrl + value.commenter.img
                        : defaultUserImg
                    }
                    className="HcCmtUserImg"
                  />
                </div>
                <div className="HcCmtTextCon">
                  <p>{value.content}</p>
                  <div className="HcCmtTextIconCon">
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
