import React, { Fragment } from "react";
import TopNav from "../Component/topNav/TopNav.jsx";
import axios from "axios";
import { withRouter } from "react-router";
import { baseUrl } from "../constVar.js";
import { checkType } from "../utility.js";
import { checkEmialExist,regPostData } from "../requestFiles/regist.js";
import "./regist.css";
export default Reg;
function Reg() {
  return (
    <div>
      <div className="RegContainer">
        <div className="RegCon">
          <RegForm />
        </div>
      </div>
    </div>
  );
}

class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      psd: null,
      psdCon: null,
      check: false,
      emailExist: true,
      psdSame: false,
      textError: null,
    };
  }
  //激活btn
  handleRegBtnActive = () => {
    const $RegFormBtn = $(".RegFormBtn");
    $RegFormBtn.removeAttr("disabled");
    $RegFormBtn.addClass("regFormBtnActive");
    $RegFormBtn.removeClass("regFormBtnNotActive");
  };
  //验证条件是否全都符合
  activeBtn = () => {
    const { emailExist, psdSame, check } = this.state;
    !emailExist && psdSame && check ? this.handleRegBtnActive() : null;
  };

  RegReturnData = (data) => {
    if (data.status === 200) {
      if (data.data.success === 1) {
        this.props.history.push("/login");
      } else if (data.data.success === 0) {
        alert("wrong");
      }
    } else {
      alert("wrong");
    }
  };

  //表单提交
  handleSubmit = (e) => {
    e.preventDefault();
    const {name,email,psd,psdCon,check,emailExist,psdSame} = this.state;
    if (check && !emailExist && psdSame) {
      let data = {
        name: name,
        email: email,
        psd: psd,
        psdCon: psdCon,
      };
      regPostData(data, (value) => this.RegReturnData(value))
    } else {
      alert("请同意");
    }
  };
  //数据
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //checkBox
  handleClickChechbox = () => {
    this.setState({ check: !this.state.check },this.activeBtn);
  };

  //邮箱验证
  emailonBlur = () => {
    const { email } = this.state;
    if (checkType("email", email)) {
      checkEmialExist({email : email}, (value) => {
        if (value.data["exist"]) {
          this.setState({
            emailExist: true,
            textError: "邮箱已存在，请重新输入",
          },this.activeBtn);
        } else {
          this.setState({ emailExist: false, textError: null },this.activeBtn);
        }
      });
    } else {
      this.setState({ textError: "请输入正确邮箱格式" },this.activeBtn);
    }
  };
  //psd是否相等
  psdConblur = () => {
    const {psd,psdCon} = this.state
    if (psd && psd === psdCon) {
      this.setState({ psdSame: true, textError: null });
    } else {
      this.setState({
        textError: "两次密码输入不一致，请重新输入",
      },this.activeBtn);
    }
    
  };

  render() {
    return (
      <Fragment>
        {this.state.textError ? (
          <div className="regShowError">
            <p>{this.state.textError}</p>
          </div>
        ) : null}
        <form className="RegForm" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">用户名</label>
            <input
              type="text"
              name="name"
              className="RegFormInput"
              placeholder="请设置用户名"
              required="required"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">邮箱</label>
            <input
              type="email"
              className="RegFormInput"
              name="email"
              placeholder="请设置邮箱"
              required="required"
              autoComplete="off"
              onChange={this.handleChange}
              onBlur={this.emailonBlur}
            />
          </div>
          <div>
            <label htmlFor="password">密码</label>
            <input
              type="password"
              name="psd"
              className="RegFormInput"
              placeholder="请设置登陆密码"
              required="required"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password_again">确认密码</label>
            <input
              type="password"
              name="psdCon"
              className="RegFormInput"
              placeholder="请确认登陆密码"
              required="required"
              autoComplete="off"
              onChange={this.handleChange}
              onBlur={this.psdConblur}
            />
          </div>
          <div className="RegFormCheckCon">
            <input
              type="checkbox"
              className="RegFormCheck"
              value={this.state.check}
              onClick={this.handleClickChechbox}
            />
            <p className="RegFormCheckLabelCon">
              阅读并接受
              <a href="" _blank="true" className="RegFormCheckLabel">
                《StudentClub用户协议》
              </a>
            </p>
          </div>
          <div>
            <div>
              <input
                type="submit"
                className="RegFormBtn regFormBtnNotActive"
                value="注册"
                disabled
              />
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}
RegForm = withRouter(RegForm);
