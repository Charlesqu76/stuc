import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from 'app/libs/router/router.config';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory()
import Header from './header/Header';
import Webpage404 from 'app/page/404/404'


export default function Routers() {
    return (
        <div>
            <Header />
            <Router history={history}>
                <Switch>
                    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    <Route component={Webpage404} />
                </Switch>
            </Router>
        </div>)
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
        history.go()
    }
}




