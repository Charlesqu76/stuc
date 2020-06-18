import React, { Fragment, useState, useEffect, useRef } from "react";
import MediaCon from "../photoCon/mediaCon.jsx";
import likeIcon from "../../static/likeIcon.svg";
import likeIconActive from "../../static/likeIconActive.svg";
import cmtIcon from "../../static/cmtIcon.svg";
import defaultUserImg from "../../static/defaultUserImg.svg";
import { baseUrl } from "../../constVar.js";
import { hcLike, hcCmt, hc } from "../../requestFiles/huche.js";
import { converStrToDate, isLogin, findId, } from "../../utility.js";
import "./hcDetail.css";
import { useHistory } from "react-router";
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
    console.log(like);
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
      {
        if (exist) {
          hcLikeList.splice(index, 1);
          setHcLikeList([...hcLikeList]);
        } else {
          setHcLikeList([...hcLikeList, { user: recLike }]);
        }
      }
    }
  }, [recLike]);
  return (
    <div className="HcDetailCon" id={data.id}>
      <HcHead data={data.user} time={data.time} />
      <HcBodyCon cmt={data.content} media={data.media} />
      <HcDown id={data.id} recCmtFun={recCmtFun} recLikeFun={recLikeFun} />
      <LikeCon like={hcLikeList} />
      <HcCmtListCon cmt={hcCmtList} id={data.id} />
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

function HcDown(props) {
  const [showCmt, setShowCmt] = useState(false);
  const history = useHistory();
  const handleClickLike = () => {
    let token = isLogin();
    if (token) {
      let id = token.split(".?")[0];
      let data = new FormData();
      data.append("hucheId", props.id);
      data.append("userId", id);
      hcLike(data, (value) => {
        console.log(value);
        props.recLikeFun(value.data.like);
      });
    } else {
      history.push('/login');
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
        <div className="HcIconCon HcLikeIcon" onClick={handleClickLike}>
          <img src={likeIcon} className="HcIcon" />
        </div>
        <div className="HcIconCon " onClick={showCmtPost}>
          <img src={cmtIcon} className="HcIcon" />
        </div>
      </div>
      {showCmt ? (
        <HcCmtPost
          changeList={props.recCmtFun}
          hcId={props.id}
          cmtIconClick={notShowCmtPost}
        />
      ) : null}
    </div>
  );
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

//循环评论
function HcCmtListCon(props) {
  const cmtList = props.cmt;
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
    setShowCmt(true);
  };

  const notShowCmtPost = () => {
    setShowCmt(false);
  };

  useEffect(() => {
    setCmtId(findId(conRef.current, "HcCmtCon"));
    setHcId(findId(conRef.current, "HcDetailCon"));
  }, [cmtId, hcId]);

  return (
    <Fragment>
      <div className={sub ? "HcCmtCon HcSubCmtCon" : 'HcCmtCon'} id={value.id}>
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
          <div className="HcCmtTextIconCon" onClick={showCmtPost} ref={conRef}>
            <img src={cmtIcon} width="20px" height="20px" />
          </div>
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

//一级和耳机评论输入和post框
function HcCmtPost(props) {
  const [cmt, setCmt] = useState(null);
  const { hcId, parCmtId = null, changeList = null, cmtIconClick } = props;
  const handleCmtChange = (e) => {
    setCmt(e.target.value);
  };

  const subClickHandle = () => {
    const token = isLogin();
    const cmtContent = cmt;
    if (cmtContent) {
      if (token) {
        let id = localStorage.getItem("token").split(".?")[0];
        let data = new FormData();
        data.append("cmt", cmtContent);
        data.append("userId", id);
        data.append("hucheId", hcId);
        data.append("parCmtId", parCmtId);
        hcCmt(data, (value) => {
          if (changeList) {
            changeList(value.data.data);
          } else {
            console.log(value);
          }
        });
      } else {
        alert("请登录");
      }
    }
    cmtIconClick();
    setCmt(null);
  };
  return (
    <Fragment>
      <div className="SubCmtCon">
        <textarea
          className="SubCmtInput"
          value={cmt}
          onChange={handleCmtChange}
        />
        <button className="SubCmtBtn" onClick={subClickHandle}>
          发表
        </button>
      </div>
    </Fragment>
  );
}
