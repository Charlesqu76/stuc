import React from "react";
import style from "./login.css";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import { requestUserLogin } from "app/remote/user/login";

@observer
export default class Login extends React.Component {
  @observable userName = "";
  @observable password = "";

  componentDidMount() {}

  @action
  changeUserName = (e) => {
    this.userName = e.target.value;
  };

  @action
  changePsd = (e) => {
    this.password = e.target.value;
  };

  handleLogin = async () => {
    const param = {
      name: this.userName,
      psd: this.password,
    };
    const resp = await requestUserLogin.remote(param);
    console.log(resp);
  };

  render() {
    return (
      <div className={style.LoginCon}>
        <div className={style.LoginForm}>
          <div className={style.LoginInputCon}>
            <input placeholder = {'用户名'}/>
          </div>
          <div className={style.LoginInputCon}>
            <input placeholder = {'密码'}/>
          </div>
          <div className={style.LoginInputCon}>
            <button>登陆</button>
          </div>
        </div>
        <div className={style.LoginRegCon}>
          <button className = {style.loginRegbtn}>新用户注册</button>
          <button className = {style.loginForgetbtn}>忘记密码</button>
        </div>
      </div>
    );
  }
}
