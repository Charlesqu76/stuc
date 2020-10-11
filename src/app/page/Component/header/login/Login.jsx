import React from "react";
import "./login.css";
import { Input, Alert, Button } from "antd";
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
      <div className="LoginCon">
        <Alert
          type={"error"}
          message={"账号或密码错误"}
          style={{ fontSize: "10px", width: "90%" }}
        />
        <div className="LoginForm">
          <div className="LoginInputCon">
            <Input
              style={{ borderRadius: "5px" }}
              placeholder="用户名"
              value={this.userName}
              onChange={this.changeUserName}
            />
          </div>
          <div className="LoginInputCon">
            <Input.Password
              style={{ borderRadius: "5px" }}
              placeholder="密码"
              value={this.password}
              onChange={this.changePsd}
            />
          </div>
          <div className="LoginInputCon">
            <Button
              type="primary"
              style={{ borderRadius: "5px", width: "100%" }}
              onClick={this.handleLogin}
            >
              登陆
            </Button>
          </div>
        </div>
        <div className="LoginRegCon">
          <Button type="link">新用户注册</Button>
          <Button type="link">忘记密码</Button>
        </div>
      </div>
    );
  }
}
