import React from "react";
import "./cenSideBar.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import { baseUrl } from "../../../constVar";

// const changePhoto = () => {
//   $("#imgReader").click();
// };

export default SideBar;
function SideBar(props) {
  const {url} = useRouteMatch();
  return (
    <>
      <div className="sideBarCom">
        <div className="sideBarHeader">
          <div className="sideBarImgCon">
            <p className="siderBarChangeP">更换头像</p>
            <img
              className="sideBarImg"
              src= {baseUrl + props.info.img}
              onClick={changePhoto}
            />
          </div>
          <div className="sideBarNameCon">
            <p>{props.info.name}</p>
          </div>
        </div>
        <div className="sideBarList">
          <ul className="sideBarListUl">
            <li>
              <NavLink to={`${url}/info`}>我的信息</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/hc`} >我的胡扯</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">关于我们</NavLink>
            </li>
            <li>
              <NavLink to="/question">问题与反馈</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
