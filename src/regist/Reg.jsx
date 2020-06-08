import React from "react";
import TopNav from "../Component/topNav/TopNav.jsx";
import axios from "axios";
import { withRouter } from "react-router";
import { baseUrl } from "../constVar.js";
import "./regist.css";
export default Reg;
function Reg(){
  return(
    <div>
    <div className="RegContainer">
      <div className="RegCon">
        <RegForm />
      </div>
    </div>
  </div>
  )

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
      psdSame: true,
    };
  }
  componentDidMount() {
    console.log(this.props);
  }

  RegReturnData = (data) => {
    if (data.state === 200) {
      if (data.data.success === 1) {
        this.props.history.push("/login");
      } else if (data.data.success === 0) {
        alert("wrong");
      }
    } else {
      alert("wrong");
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.check && !this.state.emailExist) {
      let data = {
        name: this.state.name,
        email: this.state.email,
        psd: this.state.psd,
        psdCon: this.state.psdCon,
      };
      axios
        .post(baseUrl + "/signin/regist/", { data })
        .then((res) => this.RegReturnData(res))
        .catch((e) => console.log(e));
    } else {
      alert("请同意");
    }
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClickChechbox = () => {
    this.setState({ check: !this.state.check });
  };
  emailonBlur = () => {
    axios
      .post("http://127.0.0.1:8000/signin/regist/RegistChechEmail", {
        email: this.state.email,
      })
      .then((res) => {
        if (res.data["exist"] && this.state.email) {
          this.setState({ emailExist: true });
          alert("邮箱已存在，请重新输入");
        } else {
          this.setState({ emailExist: false });
        }
      })
      .catch((e) => console.log(e));
  };

  psdConblur = () => {
    if (this.state.psd === this.state.psdCon) {
      this.setState({ psdSame: true });
    } else {
      this.setState({ psdSame: false, psdCon: "" });
    }
  };

  render() {
    return (
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
          {!this.state.psdSame && <p className = 'psdNotSame'>两次密码不匹配，请重申输入</p>}
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
              className="RegFormBtn"
              style={{
                background:
                  this.state.check && !this.state.emailExist
                    ? "linear-gradient(90deg, #33548a,#e67f4f)"
                    : "gray",
              }}
              value="注册"
            />
          </div>
        </div>
      </form>
    );
  }
}
RegForm = withRouter(RegForm);
