import React, { Fragment, useState, useEffect } from "react";
import "./user.css";
import { getUserData } from "../../requestFiles/manage.js";

export default User;
function User() {
  return (
    <div className="ManUserCon">
      <header className="ManUserTitle">用户信息</header>
      <div className="ManUserTableCon">
        <table className = 'ManUserTable'>
          <tr>
              <th>id</th>
              <th>email</th>
              <th>name</th>
              <th>school</th>
              <th>time</th>
          </tr>
          <UserData />
        </table>
      </div>
    </div>
  );
}

function UserData() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserData((value) => {
      if (value.status === 200) {
          console.log(value.data)
        if (value.data.success === 1) {
            setUser(value.data.data)
        }
      }
    });
  },[]);
  return <Fragment>
      {user.map((value) => {
          return (
              <tr>
                  <td>{value.id}</td>
                  <td>{value.email}</td>
                  <td>{value.name}</td>
                  <td>{value.school}</td>
                  <td>{value.regist_time}</td>
              </tr>
          )
          console.log(value)
      })}
  </Fragment>;
}
