import React, { Fragment } from "react";
import style from "./Header.css";
import Title from "app/page/Component/header/title/Title";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import { Routes } from "app/libs/router/name.config";
import { ERouter } from "app/Routers";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Login from "./login/Login";
import Regist from "./regist/Reg";
import Model from 'app/page/Component/Modal/Modal.jsx'

@observer
export default class Header extends React.Component {
  @observable showModal = false;

  @action
  changeShowModal = () => {
    this.showModal = !this.showModal;
  };

  render() {
    return (
      <Fragment>
        <div className={style.TopNav}>
          <div className={style.TopNavTitle}>
            <Title size={30} onClick={() => ERouter.push(Routes.Huche)} />
          </div>
          <div className={style.TopNavRight}>
            <div>
              <button onClick={this.changeShowModal} className = {style.textButton}>
                登陆
              </button>
            </div>
            <div>
              <QuestionCircleTwoTone
                style={{ fontSize: "22px", cursor: "pointer" }}
              />
            </div>
          </div>
          <Model show = {this.showModal}>
              <Login />
          </Model>
        </div>
      </Fragment>
    );
  }
}
