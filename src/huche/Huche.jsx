import React, { Fragment, useState, useEffect } from "react";
import PostCon from "../Component/postCon/PostCon.jsx";
import Hc from "../Component/hcCon/Hc.jsx";
import axiso from "axios";
import { baseUrl } from "../constVar.js";
import "./huche.css";
import { useParams, useLocation, useHistory } from "react-router";

function HcCom() {
  return (
    <Fragment>
      <div className="HcComBody">
        <PostCon />
        <HcList />
      </div>
    </Fragment>
  );
}
export default HcCom;

function HcList() {
  let [dataList, setDataList] = useState([]);
  let location = useLocation();
  console.log(location);
  let pageNum = location.search.match(/page=(\d+)/)[1];
  let url = `${baseUrl}/huche?page=${pageNum}`;
  let hcScrollEvent = (node) => {
    if (node.getBoundingClientRect().top < window.innerHeight) {
      console.log("see");
    }
  };

  useEffect(() => {
    let loading = document.querySelector(".HcLoadingCon");
    window.addEventListener("scroll", () => hcScrollEvent(loading));
    axiso
      .get(url)
      .then((res) => {
        if (res.status === 200 && res.data) {
          let arr = [...res.data.data];
          setDataList([...dataList, ...arr]);
          console.log(arr);
        }
      })
      .catch((e) => console.error(e));
    return () => {
      window.addEventListener("scroll", () => hcScrollEvent(loading));
    };
  }, [setDataList]);
  return (
    <div>
      <div className="HcTotalCon">
        {dataList.map((value) => (
          <Hc key={value.id} data={value} detail={false} />
        ))}
      </div>
      <div className="HcLoadingCon">
        <p>加载更多...</p>
      </div>
    </div>
  );
}
