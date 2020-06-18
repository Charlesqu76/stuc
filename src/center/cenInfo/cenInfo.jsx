import React, { useEffect } from "react";
import "./cenInfo.css";
import ChangeNameIcon from "../../static/changeName.svg";
import { useState } from "react";
import { changeNameFun } from "../../requestFiles/center.js";
import { useParams } from "react-router";
import { schoolList } from "../../constVar.js";
export default CenInfo;

function CenInfo(props) {
  const { name, email, id, school } = props.info;
  const [userName, setUserName] = useState(null);
  const paras = useParams();

  const handleNameBlur = () => {
    $(".cenInfoVNameInput").attr("disabled", true);
    let data = new FormData();
    data.append("name", userName);
    data.append("userId", paras.id);
    changeNameFun(data, (value) => {
      console.log(value);
    });
  };

  return (
    <div className="cenInfoCon">
      <div className="cenInfoUserName">
        <div className="cenInfoLabelCon">
          <p>用户名</p>
        </div>
        <div className="cenInfoVCon">
          <input
            className="cenInfoVNameInput"
            disabled
            placeholder={name}
            onBlur={handleNameBlur}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
          <div className="cenInfoVChangeNameIconCon">
            <img
              src={ChangeNameIcon}
              onClick={() => {
                $(".cenInfoVNameInput").removeAttr("disabled");
              }}
            />
          </div>
        </div>
      </div>
      <div className="cenInfoUserId">
        <div className="cenInfoLabelCon">
          <p>用户ID</p>
        </div>
        <div className="cenInfoVCon">
          <p>{id}</p>
        </div>
      </div>
      <div className="cenInfoUserEmail">
        <div className="cenInfoLabelCon">
          <p>用户邮箱</p>
        </div>
        <div className="cenInfoVCon">
          <p>{email}</p>
        </div>
      </div>
      <div className="cenInfoUserSchool">
        <div className="cenInfoLabelCon">
          <p>学校</p>
        </div>
        <div className="cenInfoVCon">
          <input
            list="schoolList"
            className="cenInfoSchoolInput"
            placeholder={school ? school : '未选择'}
            disabled
          />
          <div className="cenInfoVChangeNameIconCon">
            <img
              src={ChangeNameIcon}
              onClick={() => {
                console.log("asdf");
                $(".cenInfoSchoolInput").removeAttr("disabled");
              }}
            />
          </div>
        </div>
      </div>
      <datalist id="schoolList">
        {schoolList.map((value) => (
          <option value={value.name} />
        ))}
      </datalist>{" "}
    </div>
  );
}
