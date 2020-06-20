import React, { useState, useEffect } from "react";
import HcDetail from "../Component/hcDetail/HcDetail.jsx";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../constVar.js";
import './detailPage.css';
import {connect} from 'react-redux';
import {addHcLike} from '../reduxFIles/actions/hc.js';

export default function DetailPage(props) {
  let [data, setData] = useState(null);
  let location = useLocation();
  let url = baseUrl + location.pathname;

  useEffect(() => {
    axios
      .get(url)
      .then((res) =>setData(res.data.data))
      .catch((error) => console.log(error));
  }, []);
  // if (data){
  //   props.addHclike(data.huche_like)
  // }
  return (
    <div className = 'hcDetailPageCon'>
      {data ? <HcDetail data={data}/> : <></>}
    </div>
  );
}

// const mapDispatchToProps = (dispatch) =>{
//   return {
//     addHclike: () => dispatch(addHcLike())
//   }

// }

// export default connect(null,mapDispatchToProps)(DetailPage);
