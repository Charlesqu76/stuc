import React from "react";
import "./cenSideBar.css";
import { NavLink, useHistory } from "react-router-dom";
import { baseUrl } from "../../constVar";

const changePhoto = () => {
  $("#imgReader").click();
};

export default SideBar;
function SideBar(props) {
  console.log(props);
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
              <NavLink to="/center/1/info">我的信息</NavLink>
            </li>
            <li>
              <NavLink to="/center/1/hc">我的胡扯</NavLink>
            </li>
            <li>
              <NavLink to="/center/1/aboutUs">关于我们</NavLink>
            </li>
            <li>
              <NavLink to="/center/1/question">问题与反馈</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
