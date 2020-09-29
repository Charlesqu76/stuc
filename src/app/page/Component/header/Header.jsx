import React, { Fragment } from "react";
import "./Header.css";
import Title from "app/page/Component/header/title/Title";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import { Button, Modal, Tabs } from "antd";
import { Routes } from "app/libs/router/name.config";
import { ERouter } from "app/Routers";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Login from "./login/Login";
import Regist from "./regist/Reg";

@observer
export default class Header extends React.Component {
  @observable showModal = true;

  @action
  changeShowModal = () => {
    this.showModal = !this.showModal;
  };

  render() {
    return (
      <Fragment>
        <div className="TopNav">
          <div className="TopNavTitle">
            <Button
              type="text"
              onClick={() => ERouter.push(Routes.Huche)}
              style={{ height: "100%" }}
            >
              <Title size={30} />
            </Button>
          </div>
          <div className={"TopNavRight"}>
            <div>
              <Button type="text" onClick={this.changeShowModal}>
                登陆
              </Button>
            </div>
            <div>
              <QuestionCircleTwoTone
                style={{ fontSize: "22px", cursor: "pointer" }}
              />
            </div>
          </div>
          <Modal
            visible={this.showModal}
            destroyOnClose={true}
            onOk={this.changeShowModal}
            onCancel={this.changeShowModal}
            footer={null}
            maskClosable={false}
          >
            <Tabs defaultActiveKey={1}>
              <Tabs.TabPane tab={"登陆"} key={1}>
                <Login />
              </Tabs.TabPane>
              <Tabs.TabPane tab={"注册"} key={2}>
                <Regist />
              </Tabs.TabPane>
            </Tabs>
          </Modal>
        </div>
      </Fragment>
    );
  }
}
