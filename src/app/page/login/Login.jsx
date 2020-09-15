import React, { Fragment } from "react";
import css from './login.css'
import { Input, Form, Button } from 'antd'
import { action, observable } from "mobx"
import { observer } from 'mobx-react'
import Title from 'app/page/Component/title/Title.jsx'

@observer
export default class Login extends React.Component {
  @observable userName = '';
  @observable password = '';

  @action
  changeUserName = (e) => {
    this.userName = e.target.value
  }

  @action
  changePsd = (e) => {
    this.password = e.target.value
  }
  render() {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div className="LoginCon">
          <div className="LoginHead">
            <Title size={26} />
          </div>
          <div className='LoginForm'>
            <Form style={{ width: '95%' }}>
              <div className="LoginInputCon">
                <Input
                  style={{ borderRadius: '5px' }}
                  placeholder="用户名"
                  value={this.userName}
                  onChange={this.changeUserName}
                />
              </div>
              <div className="LoginInputCon">
                <Input.Password
                  style={{ borderRadius: '5px' }}
                  placeholder="密码"
                  value={this.password}
                  onChange={this.changePsd}
                />
              </div>
              <div className="LoginInputCon">
                <Button type='primary' style={{ borderRadius: '5px', width: '100%' }}>登陆</Button>
              </div>
            </Form>
          </div>
          <div className="LoginRegCon">
            <Button type='link'>新用户注册</Button>
            <Button type='link'>忘记密码</Button>
          </div>
        </div>
      </div>
    );
  }
}



  // handleSubmit = (e) => {
  //   let data = { name: this.state.name, psd: this.state.psd };
  //   e.preventDefault();
  //   axios
  //     .post(baseUrl + "/signin/", data)
  //     .then((res) => {
  //       this.LoginOrNot(res.data["success"], res.data["token"]);
  //     })
  //     .catch((e) => console.log(e));
  // };
  // LoginOrNot = (success, token) => {
  //   if (success === 1) {
  //     localStorage.setItem("token", token);
  //     this.props.login();
  //     this.props.history.push("/huche");
  //   } else if (success === 0) {
  //     this.setState({ errormsg: "用户名或密码错误，请重新输入" });
  //   } else {
  //     console.error("error");
  //   }
  // };


