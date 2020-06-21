import React, { useState, useEffect, Fragment } from "react";
import "./center.css";
import {
  Route,
  Switch,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import SideBar from "./cenSideBar/cenSideBar.jsx";
import CenInfo from "./cenInfo/cenInfo.jsx";
import CenHc from "./centerHc/cenHc.jsx";
import { getUserInfo } from "../requestFiles/center.js";
import ChangePhoto from "../Component/chengePhoto/changePhoto.jsx";



export default function Center() {
  const [userInfo, setUserInfo] = useState(null);
  const params = useParams();
  let { path, url } = useRouteMatch();
  useEffect(() => {
    getUserInfo(params.id, (value) => {
      setUserInfo(value.data.data);
    });
  }, []);
  return (
    <Fragment>
      <div className="changePhotoConDiv">
        <div className="changePhotoSubConDiv">
          <ChangePhoto />
        </div>
      </div>
      {userInfo != null ? (
        <div className="centerCon">
          <div className="cenConBarCon">
            <SideBar info={userInfo} />
          </div>
          <div className="centerCntCon">
            <Switch>
              <Route path={`${path}`} exact>
                <Redirect to={`${url}/info`} />
              </Route>
              <Route path={`${path}/info`} exact>
                <CenInfo info={userInfo} />
              </Route>
              <Route path={`${path}/hc`} exact>
                <CenHc />
              </Route>
            </Switch>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
