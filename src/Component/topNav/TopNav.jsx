import React, { Fragment, useEffect, useState } from "react";
import "./topNav.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import titleIcon from "../../static/titleIcon.svg";
import helpIcon from "../../static/helpIcon.svg";
import defaultUserImg from "../../static/defaultUserImg.svg";
import { topNavVer } from "../../requestFiles/topNav.js";
import { isLogin } from "../../utility.js";
import {baseUrl} from '../../constVar.js'
export default TopNav;
function TopNav(props) {
  const history = useHistory();
  let topTitleClick = (e) => {
    history.push("/huche");
    e.stopPropagation();
  };
  return (
    <Fragment>
      <div className="TopNav">
        <div className="TopNavTitle" onClick={topTitleClick}>
          <img src={titleIcon} />
        </div>
        {props.user && <TopNavRight />}
      </div>
    </Fragment>
  );
}

function TopNavRight() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = isLogin();
    if (token) {
      topNavVer((value) => {
        if (value.status === 200 && value.data.login === 1) {
          setName(value.data.data.name);
          setImg(value.data.data.img);
          setLogin(true);
        }
      });
    }
  }, []);

  let centerClick = (e) => {
    let id = localStorage.getItem("token").split(".?")[0];
    history.push(`/center/${id}`);
    e.stopPropagation();
  };
  let exitClick = (e) => {
    localStorage.removeItem("token");
    setLogin(false);
    e.stopPropagation();
  };
  return (
    <Fragment>
      <ul className="TopNavRight">
        <div className="TopNavRightNameCon">
          {login ? (
            <Fragment>
              <div className="TopNavImgCon">
                <img
                  className="TopNavImg"
                  src={
                    img === ""
                      ? defaultUserImg
                      : `${baseUrl}/media/${img}`
                  }
                />
                <ul className="TopNavImgDown">
                  <li>
                    <a onClick={centerClick}>个人中心</a>
                  </li>
                  <li>
                    <a onClick={exitClick}>退出</a>
                  </li>
                </ul>
              </div>
              <a className="TopNavName">{name}</a>
            </Fragment>
          ) : (
            <Fragment>
              <div className="TopNavLogRegCon">
                <Link to="/login" className="TopNavLog">
                  登陆
                </Link>
                <Link to="/reg" className="TopNavReg">
                  注册
                </Link>
              </div>
            </Fragment>
          )}
        </div>
        <div className="TopNavSug TopNavIcon">
          <img src={helpIcon} className="TopNavHelpIcon" />
        </div>
      </ul>
    </Fragment>
  );
}
