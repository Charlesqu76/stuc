import React, { Fragment, useState, useEffect } from "react";
import PostCon from "../Component/postCon/PostCon.jsx";
import Hc from "../Component/hcCon/Hc.jsx";
import axiso from "axios";
import { baseUrl } from "../constVar.js";
import "./huche.css";
import { useParams, useLocation, useHistory } from "react-router";

function HcCom() {
  document.title = "胡扯";
  const [data, setData] = useState(null);
  let getData = (data) => {
    setData(data);
  };
  return (
    <Fragment>
      <div className="HcComBody">
        <PostCon getData={getData} />
        <HcList data={data} />
      </div>
    </Fragment>
  );
}
export default HcCom;

function HcList(props) {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  let url = `${baseUrl}/huche`;
  let hcScrollEvent = (node) => {
    if (
      (node.getBoundingClientRect().top < window.innerHeight) &
      (node.getBoundingClientRect().top !== 0)
    ) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    if (loading) {
      axiso
        .get(url, { params: { page: page } })
        .then((res) => {
          if (res.status === 200 && res.data) {
            let arr = [...res.data.data];
            if (arr.length < 10) {
              setDataList([...dataList, ...arr]);
            } else {
              setDataList([...dataList, ...arr]);
            }
          }
        })
        .catch((e) => console.error(e));
    }
  }, []);
  useEffect(()=>{
    {
      props.data ? setDataList([props.data, ...dataList]) : null;
    }
  }, [props.data])
  return (
    <div>
      <div className="HcTotalCon">
        {dataList.map((value) => (
          <Hc key={value.id} data={value} detail={false} />
        ))}
      </div>
      {loading ? (
        <div className="HcLoadingCon">
          <p>加载更多...</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
