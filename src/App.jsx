import React, { Fragment } from "react";
import Login from "./Login/Login.jsx";
import Reg from "./regist/Reg.jsx";
import HcCom from "./huche/Huche.jsx";
import Webpage404 from "./404/404.jsx";
import DetailPage from "./detailPage/DetailPage.jsx";
import TopNav from "./Component/topNav/TopNav.jsx";
import Center from "./center/Center.jsx";
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

export default function App() {
  return (
    <Fragment>
      <Router>
        <TopNav user={true} />
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/reg" exact>
            <Reg />
          </Route>
          <Route path="/huche" exact>
            <HcCom />
          </Route>
          <Route path="/huche/:id" exact>
            <DetailPage />
          </Route>
          <Route path="/center/:id" exact>
            <Center />
          </Route>
          <Route path="/" exact>
            <Redirect to ='/huche'/>
          </Route>
          <Route path="*">
            <Webpage404 />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
