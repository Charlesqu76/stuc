import React, { Fragment, useState, useEffect } from "react";
import PostCon from "../../Component/postCon/PostCon.jsx";
import Hc from "../../Component/hcCon/Hc.jsx";
import axiso from "axios";
import { baseUrl } from "../../constVar.js";
import "./huche.css";
import { eleIsVisiable } from "../../utility.js";
import {debound} from '../../utility.js';

export default HcCom;
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

function HcList(props) {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  let url = `${baseUrl}/huche`;
  useEffect(() => {
    let HcLoadingCon = document.querySelector(".HcLoadingCon");
    let watchBounding = () => {
      if (eleIsVisiable(HcLoadingCon)) {
        setPage(page + 1);
        window.removeEventListener("scroll", watchBounding);
      } else {
        console.log("invisiable");
      }
    };
    if (loading) {
      window.addEventListener("scroll", watchBounding);
      axiso
        .get(url, { params: { page: page } })
        .then((res) => {
          if (res.status === 200 && res.data) {
            let arr = [...res.data.data];
            if (arr.length) {
              setDataList([...dataList, ...arr]);
              if (arr.length < 10) {
                setLoading(false);
                window.removeEventListener("scroll", watchBounding);
              } else {
              }
            }
          }
        })
        .catch((e) => console.error(e));
    }
    return () => {
      window.removeEventListener("scroll", watchBounding);
    };
  }, [page]);

  useEffect(() => {
    {
      props.data ? setDataList([props.data, ...dataList]) : null;
    }
  }, [props.data]);
  return (
    <>
      <div className="HcTotalCon">
        {dataList.map((value) => (
          <Hc key={value.id} data={value} />
        ))}
      </div>
      {loading ? (
        <div className="HcLoadingCon">
          <p>加载更多...</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
