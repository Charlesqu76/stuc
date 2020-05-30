import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Nav from "./cpt/nav.jsx";
import NavSub from "./cpt/navSub.jsx";
import OverView from "./cpt/overView.jsx";

import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

const Ana = React.lazy(() => import("./cpt/ana.jsx"));
const Cmp = React.lazy(() => import("./cpt/cmp.jsx"));
const Sale = React.lazy(() => import("./cpt/sale.jsx"));
const Help = React.lazy(() => import("./cpt/help.jsx"));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <React.Suspense fallback={<div>loading</div>}>
          <Nav />
          <Switch>
            <Route path="/help" component={Help} />
            <div >
              <NavSub />
                  <Route path="/overView" component={OverView}></Route>
                  <Route path="/ana" component={Ana} />
                  <Route path="/cmp" component={Cmp} />
                  <Route path="/sale" component={Sale} />
              </div>
            <Redirect to="/overView" />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
