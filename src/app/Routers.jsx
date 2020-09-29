import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from 'app/libs/router/router.config';
import { createHashHistory } from 'history';
const history = createHashHistory()
import Header from 'app/page/Component/header/Header';
import Webpage404 from 'app/page/404/404'


export default function Routers() {
    return (
        <Fragment>
            <Header />
            <Router>
                <Switch>
                    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    <Route path='/' exact />
                    <Route component={Webpage404} />
                </Switch>
            </Router>
        </Fragment>)
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

export const ERouter = {
    push: (url, param) => {
        history.push(url, param)
    }
}




