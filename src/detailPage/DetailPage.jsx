import React, { useState, useEffect } from "react";
import Hc from "../Component/hcCon/Hc.jsx";
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
      {data ? <Hc data={data} detail={true} /> : <></>}
    </div>
  );
}
export default DetailPage;
