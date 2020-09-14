import React, { useEffect, useState } from "react";
import "./cenHc.css";
import { useParams } from "react-router-dom";
import { getCenHc } from "../../requestFiles/center.js";
import Hc from "../../Component/hcCon/Hc.jsx";

export default CenHc;
function CenHc() {
  const params = useParams();
  const [data, setData] = useState([]);
  const { id } = params;
  useEffect(() => {
    getCenHc(id, (value) => {
      if (value.status === 200 && value.data.success === 1) {
        setData([...value.data.data]);
      }
    });
  }, []);
  return (
    <div className="cenHcCon">
      {data.map((value) => (
        <Hc key={value.id} data={value} />
      ))}
    </div>
  );
}
