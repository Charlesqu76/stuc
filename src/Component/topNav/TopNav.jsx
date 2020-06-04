import React from "react";
import "./topNav.css";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";
axios.defaults.headers["token"] = localStorage.getItem("token");
import titleIcon from "../../static/titleIcon.svg";
import helpIcon from "../../static/helpIcon.svg";
import defaultUserImg from "../../static/defaultUserImg.svg";
import { baseUrl } from "../../constVar.js";

class TopNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showUser: false,
    };
  }
  componentDidMount() {
    {
      localStorage.getItem("token")
        ? this.setState({ showUser: true })
        : this.setState({ showUser: false });
    }
  }
  topTitleClick = (e) => {
    this.props.history.push("/huche");
    e.stopPropagation();
  };
  render() {
    console.log("nav con");
    return (
      <div className="TopNav">
        <div className="TopNavTitle" onClick={this.topTitleClick}>
          <img src={titleIcon} />
        </div>
        {this.props.user && <Route component={TopNavRight} />}
      </div>
    );
  }
}
class TopNavRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      name: "",
      img: "",
    };
  }

  componentDidMount() {
    axios
      .get(baseUrl + "/signin/vertificationLog")
      .then((res) => {
        if (res.data.login) {
          this.setState({
            login: true,
            name: res.data.data.name,
            img: res.data.data.img,
          });
        }
      })
      .catch((e) => console.log(e));
  }

  handleLoginClock = () => {
    this.props.history.push("/login");
  };

  handleRegClock = () => {
    this.props.history.push("/reg");
  };

  exitClick = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };
  render() {
    return (
      <ul className="TopNavRight">
        <div className="TopNavRightNameCon">
          {this.state.login ? (
            <>
              <img
                className="TopNavImg"
                src={
                  this.state.img === ""
                    ? defaultUserImg
                    : "http://127.0.0.1:8000/media/" + this.state.img
                }
              />
              <a className="TopNavName">{this.state.name}</a>
            </>
          ) : (
            <>
              <div className="TopNavLogRegCon">
                <a className="TopNavLog" onClick={this.handleLoginClock}>
                  登陆
                </a>
                <a className="TopNavReg" onClick={this.handleRegClock}>
                  注册
                </a>
              </div>
            </>
          )}
        </div>
        <div className="TopNavSug TopNavIcon">
          <img src={helpIcon} className="TopNavHelpIcon" />
        </div>
      </ul>
    );
  }
}
export default withRouter(TopNav);
