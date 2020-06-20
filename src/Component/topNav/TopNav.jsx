import React, { Fragment, useEffect, useState } from "react";
import "./topNav.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import titleIcon from "../../static/titleIcon.svg";
import helpIcon from "../../static/helpIcon.svg";
import { topNavVer } from "../../requestFiles/topNav.js";
import { baseUrl } from "../../constVar.js";
import { connect } from "react-redux";
import { logOut } from "../../reduxFIles/actions/log.js";

export default function TopNav() {
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
        <TopNavRight />
      </div>
    </Fragment>
  );
}




const mapStateToProps = (state) => {
  return {
    log: state.log,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logOut());
    },
  };
};

TopNavRight = connect(mapStateToProps, mapDispatchToProps)(TopNavRight);

function TopNavRight(props) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (props.log) {
      topNavVer((value) => {
        if (value.status === 200 && value.data.login === 1) {
          setName(value.data.data.name);
          setImg(value.data.data.img);
        }
      });
    }
  }, [props.log]);

  let centerClick = (e) => {
    let id = localStorage.getItem("token").split(".?")[0];
    history.push(`/center/${id}`);
    e.stopPropagation();
  };
  let exitClick = (e) => {
    localStorage.removeItem("token");
    props.logout();
    e.stopPropagation();
  };
  return (
    <Fragment>
      <ul className="TopNavRight">
        <div className="TopNavRightNameCon">
          {props.log && name? (
            <Fragment>
              <div className="TopNavImgCon">
                <img
                  className="TopNavImg"
                  src={`${baseUrl}/media/${img}`}
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
