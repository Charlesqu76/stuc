import React from "react";
import { Input, Checkbox, Button, Form, Alert } from "antd";
import { observable, action, runInAction } from "mobx";
import { observer } from "mobx-react";
import "./regist.css";
import { requestUserRegist } from "app/remote/user/regist";
import { emailValid, userNameValid } from "app/libs/utility/validinput";

@observer
export default class Reg extends React.Component {
  @observable name = "";
  @observable email = "";
  @observable psd = "";
  @observable psdSec = "";
  @observable check = "";
  @observable emailExist = null;
  @observable psdSame = null;

  @action
  changeName = (e) => {
    this.name = e.target.value;
    console.log(this.name);
    if (!userNameValid(this.name)) {
      console.log("asdasd");
    }
  };
  @action
  changeEmail = (e) => {
    this.email = e.target.value;
  };
  @action
  changePsd = (e) => {
    this.psd = e.target.value;
  };
  @action
  changePsdSec = (e) => {
    this.psdSec = e.target.value;
  };
  @action
  changeCheck = (e) => {
    this.check = e.target.value;
  };

  @action
  registHandle = async () => {
    const param = {
      name: this.name,
      email: this.email,
      psd: this.psd,
      psdSec: this.psdSec,
    };
    let a = await requestUserRegist.remote(param);
    console.log(a);
    runInAction(() => {
      (this.name = ""), (this.email = ""), (this.psd = ""), (this.psdSec = "");
    });
  };
  render() {
    return (
      <div>
        <div className="RegContainer">
          <div className="RegCon">
            <Alert
              type={"error"}
              message={"ss"}
              style={{ fontSize: "10px", width: "90%", marginBottom: '10px'}}
            />
            <Form className={"regFormCom"}>
              <Form.Item label={"用户名"}>
                <Input placeholder="请设置用户名" onChange={this.changeName} />
              </Form.Item>
              <Form.Item label={"邮箱"}>
                <Input placeholder="请设置邮箱" onChange={this.changeEmail} />
              </Form.Item>
              <Form.Item label={"密码"}>
                <Input.Password
                  placeholder="请设置登陆密码"
                  onChange={this.changePsd}
                />
              </Form.Item>
              <Form.Item label={"确认密码"}>
                <Input.Password
                  placeholder="请确认登陆密码"
                  onChange={this.changePsdSec}
                  onBlur={this.psdConblur}
                />
              </Form.Item>
              <Form.Item className="RegFormCheckCon">
                <Checkbox
                  type="checkbox"
                  checked={this.check}
                  onClick={this.handleClickChechbox}
                />
                <p style={{ margin: "0 10px" }}>
                  阅读并接受
                  <a href="" _blank="true" style={{ color: "#33548a" }}>
                    《StudentClub用户协议》
                  </a>
                </p>
              </Form.Item>
              <Form.Item>
                <Button
                  // disabled={true}
                  style={{ width: "100%", borderRadius: "5px" }}
                  onClick={() => this.registHandle()}
                >
                  注册
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
