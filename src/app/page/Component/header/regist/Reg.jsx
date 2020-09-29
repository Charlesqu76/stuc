import React from "react";
import { Input, Checkbox, Button, Form } from "antd";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import "./regist.css";
import { requestUserRegist } from "app/remote/user/regist";

export default function Reg() {
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
@observer
class RegForm extends React.Component {
  @observable name = "";
  @observable emial = "";
  @observable psd = "";
  @observable psdSec = "";
  @observable check = "";
  @observable emailExist = null;
  @observable psdSame = null;

  @action
  changeName = (e) => {
    this.name = e.target.value;
  };
  @action
  changeEmail = (e) => {
    this.emial = e.target.value;
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
  registHandle = async() => {
    const param = {
      name: this.name,
      emial: this.emial,
      psd: this.psd,
    };
    let a = await requestUserRegist.remote(param);
    console.log(a)
  };

  //验证条件是否全都符合
  // activeBtn = () => {
  //   const { emailExist, psdSame, check } = this.state;
  //   !emailExist && psdSame && check ? this.handleRegBtnActive() : null;
  // };

  // RegReturnData = (data) => {
  //   if (data.status === 200) {
  //     if (data.data.success === 1) {
  //       this.props.history.push("/login");
  //     } else if (data.data.success === 0) {
  //       alert("wrong");
  //     }
  //   } else {
  //     alert("wrong");
  //   }
  // };

  //表单提交
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, psd, psdCon, check, emailExist, psdSame } = this.state;
  //   if (check && !emailExist && psdSame) {
  //     let data = {
  //       name: name,
  //       email: email,
  //       psd: psd,
  //       psdCon: psdCon,
  //     };
  //     regPostData(data, (value) => this.RegReturnData(value))
  //   } else {
  //     alert("请同意");
  //   }
  // };

  //邮箱验证
  // emailonBlur = () => {
  //   const { email } = this.state;
  //   if (checkType("email", email)) {
  //     checkEmialExist({ email: email }, (value) => {
  //       if (value.data["exist"]) {
  //         this.setState({
  //           emailExist: true,
  //           textError: "邮箱已存在，请重新输入",
  //         }, this.activeBtn);
  //       } else {
  //         this.setState({ emailExist: false, textError: null }, this.activeBtn);
  //       }
  //     });
  //   } else {
  //     this.setState({ textError: "请输入正确邮箱格式" }, this.activeBtn);
  //   }
  // };
  //psd是否相等
  // psdConblur = () => {
  //   const { psd, psdCon } = this.state
  //   if (psd && psd === psdCon) {
  //     this.setState({ psdSame: true, textError: null });
  //   } else {
  //     this.setState({
  //       textError: "两次密码输入不一致，请重新输入",
  //     }, this.activeBtn);
  //   }

  // };

  render() {
    return (
      <Form className={"regFormCom"}>
        <Form.Item label={"用户名"}>
          <Input placeholder="请设置用户名" onChange={this.changeName} />
        </Form.Item>
        <Form.Item label={"邮箱"}>
          <Input placeholder="请设置邮箱" onChange={this.handleChange} />
        </Form.Item>
        <Form.Item label={"密码"}>
          <Input.Password
            placeholder="请设置登陆密码"
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item label={"确认密码"}>
          <Input.Password
            placeholder="请确认登陆密码"
            onChange={this.handleChange}
            onBlur={this.psdConblur}
          />
        </Form.Item>
        <Form.Item className="RegFormCheckCon">
          <Checkbox
            type="checkbox"
            value={this.check}
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
    );
  }
}
