import React, { Fragment } from "react";
import TopNav from "./app/page/Component/topNav/TopNav";
import { routes } from 'app/libs/router/router.config'

import {
  HashRouter as Router,
  Switch,
} from "react-router-dom";
import { Route } from "app/libs/router/name.config";

export default App;
function App(props) {
  return (
    <Fragment>
      <Router>
        <TopNav />
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </Router>
    </Fragment>
  );
}


function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
