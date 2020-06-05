import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import TopNav from "../Component/topNav/TopNav.jsx";
import "./login.css";
import titleIcon from "../static/titleIcon.svg";
import { baseUrl } from "../constVar.js";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="LoginContainer">
          <div className="LoginCon">
            <div className="LoginHead">
              <img src={titleIcon} />
            </div>
            <LoginForm />
            <div className="LoginRegCon">
              <Link to={"/reg"} className="LoginReg">
                新用户注册
              </Link>
            </div>
            <div className="LoginForCon">
              <Link to={"/huche"} className="LoginFor">
                忘记密码
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      psd: "",
      // success: true,
    };
  }

  componentDidMount() {
    // console.log(this.props);
  }

  handleSubmit = (e) => {
    let data = { name: this.state.name, psd: this.state.psd };
    e.preventDefault();
    axios
      .post(baseUrl + "/signin/", data)
      .then((res) => {
        this.LoginOrNot(res.data["success"], res.data["token"]);
      })
      .catch((e) => alert(e));
  };
  LoginOrNot = (success, token) => {
    if (success === 1) {
      console.log("success log in ");
      localStorage.setItem("token", token);
      this.props.history.push("/huche");
    } else if (success === 0) {
      alert("用户名或密码错误，请重新输入");
    } else {
      console.error("error");
    }
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div className="LoginNPCon">
          <div className="LoginUser LoginInputCon">
            <input
              type="text"
              className="LoginInputUser LoginInput"
              name="name"
              placeholder="用户名"
              required="required"
              onChange={this.handleChange}
            />
          </div>
          <div className="LoginPsd LoginInputCon">
            <input
              type="password"
              className="LoginInputPsd LoginInput"
              name="psd"
              placeholder="密码"
              required="required"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="LoginBtnCon">
          <input
            type="submit"
            className="LoginBtn"
            name="submit"
            value="登陆"
          />
        </div>
      </form>
    );
  }
}

LoginForm = withRouter(LoginForm);
