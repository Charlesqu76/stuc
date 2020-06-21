import React, { useState, useEffect } from "react";
import "./detailPage.css";
import HcDetail from "../Component/hcDetail/HcDetail.jsx";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import { baseUrl } from "../constVar.js";
import { connect } from "react-redux";
import { addDetail } from "../reduxFIles/actions/hc.js";


const mapStateToProps = (state) =>{
  return {
    data : state.hcDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDetailHc: (data) => {
      dispatch(addDetail(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);

function DetailPage(props) {
  const { url: pathUrl } = useRouteMatch();
  let url = baseUrl + pathUrl;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        props.addDetailHc(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="hcDetailPageCon">
      {props.data ? <HcDetail data={props.data} /> : <></>}
    </div>
  );
}
