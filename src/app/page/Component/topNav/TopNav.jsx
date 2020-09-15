import React, { Fragment, useEffect, useState } from "react";
import "./topNav.css";
import { useHistory } from "react-router";
// import { topNavVer } from "../../requestFiles/topNav.js";
// import { logOut } from "../../reduxFIles/actions/log.js";
import Title from 'app/page/Component/title/Title'
import { QuestionCircleTwoTone } from '@ant-design/icons'
import { Button, Menu } from 'antd';
import {Route} from 'app/libs/router/name.config'

export default function TopNav() {
  const history = useHistory();
  let topTitleClick = (e) => {
    history.push("/huche");
  };
  return (
    <Fragment>
      <div className="TopNav">
        <div className="TopNavTitle" onClick={topTitleClick}>
          <Title size={30} />
        </div>
        <Menu mode='horizontal' style = {{backgroundColor: '#eaf2f2'}}>
          <Menu.Item>
            <Button type='text' onClick = {()=> history.push(Route.Login)} >登陆</Button>
          </Menu.Item>
          <Menu.Item>
            <Button type='text'>注册</Button>
          </Menu.Item>
        </Menu>
        {/* <ul className="TopNavRight">
          <div className="TopNavRightNameCon">
            {props.log && name ? (
              <Fragment>
                <div className="TopNavImgCon">
                  <img
                    className="TopNavImg"
                    src={`${baseUrl}/media/${img}`}
                  />
                  <ul className="TopNavImgDown">
                    <li>
                      <a onClick={centerClick}>个人中心</a>
                    </li>
                    <li>
                      <a onClick={exitClick}>退出</a>
                    </li>
                  </ul>
                </div> */}
        {/* <a className="TopNavName">{name}</a>
              </Fragment>
            ) : (
                <Fragment>
                  <div className="TopNavLogRegCon">
                    <Link to="/login" className="TopNavLog">
                      登陆
                </Link>
                    <Link to="/reg" className="TopNavReg">
                      注册
                </Link>
                  </div>
                </Fragment>
              )}
          </div>
          <div className="TopNavSug TopNavIcon">
            <QuestionCircleTwoTone style={{ fontSize: '24px' }} />
          </div>
        </ul> */}
      </div>
    </Fragment>
  );
}

// function TopNavRight(props) {
//   const [name, setName] = useState("");
//   const [img, setImg] = useState("");
//   const history = useHistory();
//   useEffect(() => {
//     if (props.log) {
//       topNavVer((value) => {
//         if (value.status === 200 && value.data.login === 1) {
//           setName(value.data.data.name);
//           setImg(value.data.data.img);
//         }
//       });
//     }
//   }, [props.log]);

//   let centerClick = (e) => {
//     let id = localStorage.getItem("token").split(".?")[0];
//     history.push(`/center/${id}`);
//     e.stopPropagation();
//   };
//   let exitClick = (e) => {
//     localStorage.removeItem("token");
//     props.logout();
//     e.stopPropagation();
//   }
// }
