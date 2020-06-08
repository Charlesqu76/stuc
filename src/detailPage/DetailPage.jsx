import React, { useState, useEffect } from "react";
import HcDetail from "../Component/hcDetail/HcDetail.jsx";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../constVar.js";

function DetailPage() {
  let [data, setData] = useState(null);
  let location = useLocation();
  let url = baseUrl + location.pathname;
  useEffect(() => {
    axios
      .get(url)
      .then((res) =>setData(res.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {data ? <HcDetail data={data}/> : <></>}
    </div>
  );
}
export default DetailPage;
