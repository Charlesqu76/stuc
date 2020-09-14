import "./mag.css";
import React from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import User from "./user/user.jsx";
import Hc from "./hc/hc.jsx";

export default function Mag() {
  const { path, url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={path} exact>
          <Redirect to={`${url}/user`} />
        </Route>
        <Route path={`${path}/user`} exact>
          <User />
        </Route>
        <Route path={`${path}/hc`} exact>
          <Hc />
        </Route>
      </Switch>
    </>
  );
}
