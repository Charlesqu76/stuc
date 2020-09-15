import React, { Fragment } from "react";
import "./Header.css";
import Title from 'app/page/Component/title/Title'
import { QuestionCircleTwoTone } from '@ant-design/icons'
import { Button, Menu } from 'antd';
import { Routes } from 'app/libs/router/name.config'
import { ERouter } from 'app/libs/router/Routers'


export default class Header extends React.Component {
  render() {
    return <Fragment>
      <div className="TopNav">
        <div className="TopNavTitle" >
          <Title size={30} />
        </div>
        <Menu mode='horizontal' style={{ backgroundColor: '#eaf2f2' }}>
          <Menu.Item>
            <Button type='text' onClick={() => ERouter.push(Routes.Login)} >登陆</Button>
          </Menu.Item>
          <Menu.Item>
            <Button type='text' onClick={() => ERouter.push(Routes.Regist)}>注册</Button>
          </Menu.Item>
        </Menu>
      </div>
    </Fragment >
  }
}

