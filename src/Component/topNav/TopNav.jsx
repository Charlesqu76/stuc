import React, { Fragment } from "react";
import "./topNav.css";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import titleIcon from "../../static/titleIcon.svg";
import helpIcon from "../../static/helpIcon.svg";
import defaultUserImg from "../../static/defaultUserImg.svg";
import { topNavVer } from "../../requestFiles/topNav.js";

class TopNav extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  topTitleClick = (e) => {
    this.props.history.push("/huche?page=1");
    e.stopPropagation();
  };
  render() {
    console.log("nav con");
    return (
      <Fragment>
        <div className="TopNav">
          <div className="TopNavTitle" onClick={this.topTitleClick}>
            <img src={titleIcon} />
          </div>
          {this.props.user && <Route component={TopNavRight} />}
        </div>
      </Fragment>
    );
  }
}

class TopNavRight extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      name: "",
      img: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ login: true });
    }
    topNavVer((value) => {
      if (value.data.login === 1) {
        this.setState({ name: value.data.data.name, img: value.data.data.img });
      }
    });
  }

  handleLoginClock = (e) => {
    this.props.history.push("/login");
    e.stopPropagation();
  };

  handleRegClock = (e) => {
    this.props.history.push("/reg");
    e.stopPropagation();
  };

  centerClick = (e) => {
    e.stopPropagation();
    let id = localStorage.getItem("token").split(".?")[0];
    this.props.history.push(`/center/${id}`);
  };
  exitClick = (e) => {
    localStorage.removeItem("token");
    this.setState({ login: false });
    e.stopPropagation();
  };
  render() {
    return (
      <Fragment>
        <ul className="TopNavRight">
          <div className="TopNavRightNameCon">
            {this.state.login ? (
              <Fragment>
                <div className="TopNavImgCon">
                  <img
                    className="TopNavImg"
                    src={
                      this.state.img === ""
                        ? defaultUserImg
                        : "http://127.0.0.1:8000/media/" + this.state.img
                    }
                  />
                  <ul className="TopNavImgDown">
                    <li>
                      <a onClick={this.centerClick}>个人中心</a>
                    </li>
                    <li>
                      <a onClick={this.exitClick}>退出</a>
                    </li>
                  </ul>
                </div>
                <a className="TopNavName">{this.state.name}</a>
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
}
export default withRouter(TopNav);
