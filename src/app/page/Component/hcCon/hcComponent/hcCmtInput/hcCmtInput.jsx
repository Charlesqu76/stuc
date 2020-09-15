import React, { useState } from "react";
import "./hcCmtInput.css";
import { isLogin } from "../../../../utility.js";
import { hcCmt } from "../../../../requestFiles/huche.js";
import { connect } from "react-redux";
import { addCmt } from "../../../../reduxFIles/actions/hc";

const mapDispatchToProps = (dispatch) => {
  return {
    addCmt: (cmt) => dispatch(addCmt(cmt)),
  };
};

const mapStateToProps = (state) => {
    return {
        hcId : state.hcDetail.id,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HcCmtPost);
function HcCmtPost(props) {
  const [cmt, setCmt] = useState(null);
  const { parCmtId = null, cmtIconClick } = props;
  const handleCmtChange = (e) => {
    setCmt(e.target.value);
  };

  const subClickHandle = () => {
    const token = isLogin();
    const cmtContent = cmt;
    if (cmtContent) {
      if (token) {
        let id = localStorage.getItem("token").split(".?")[0];
        let data = new FormData();
        data.append("cmt", cmtContent);
        data.append("userId", id);
        data.append("hucheId", props.hcId);
        data.append("parCmtId", parCmtId);
        hcCmt(data, (value) => {
          props.addCmt(value.data.data);
        });
      } else {
        alert("请登录");
      }
    }
    cmtIconClick();
  };
  return (
    <>
      <div className="SubCmtCon">
        <textarea
          className="SubCmtInput"
          value={cmt}
          onChange={handleCmtChange}
        />
        <button className="SubCmtBtn" onClick={subClickHandle}>
          发表
        </button>
      </div>
    </>
  );
}
