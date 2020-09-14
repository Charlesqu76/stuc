import React, { Fragment, useState, useEffect } from "react";
import "./hc.css";
import { getHcData, delHcData } from "../../../requestFiles/manage.js";

export default Hc;
function Hc() {
  return (
    <div className="ManHcCon">
      <header className="ManHcTitle">胡扯信息</header>
      <div className="ManHcTableCon">
        <table className="ManHcTable">
          <tr>
            <th>id</th>
            <th>email</th>
            <th>name</th>
            <th>content</th>
            <th>time</th>
            <th>watch</th>
          </tr>
          <HcData />
        </table>
      </div>
    </div>
  );
}

function HcData() {
  const [hc, setHc] = useState([]);

  useEffect(() => {
    getHcData((value) => {
      if (value.status === 200) {
        if (value.data.success === 1) {
          setHc(value.data.data);
        }
      }
    });
  }, []);
  return (
    <Fragment>
      {hc.map((value) => {
        return (
          <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.user.email}</td>
            <td>{value.user.name}</td>
            <td>{value.content}</td>
            <td>{value.time}</td>
            <td>{value.watch}</td>
            <td
              onClick={() => {
                let con = confirm("确定要删除？ ");
                if (con) {
                  let data = new FormData();
                  data.append("id", value.id);
                  delHcData(data, (value2) => {
                    if ((value2.status === 200) & (value2.data.success === 1)) {
                      let n = 0;
                      for (let h of hc) {
                        if (value.id === h.id) {
                            hc.splice(n,1)
                            setHc([...hc])
                            break
                        }
                        n++;
                      }
                    }
                  });
                }
              }}
            >
              {" "}
              delete
            </td>
          </tr>
        );
      })}
    </Fragment>
  );
}
