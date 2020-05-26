import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Nav from './cpt/nav.jsx';
import NavSub from './cpt/navSub.jsx';
import OverView from './cpt/overView.jsx';
// import Ana from './cpt/ana.jsx';
// import Cmp from './cpt/cmp.jsx';
// import Sale from './cpt/sale.jsx';
import {HashRouter as Router, Redirect, Route, Switch,} from "react-router-dom" ;

const Ana = React.lazy(() => import('./cpt/ana.jsx'))
const Cmp = React.lazy(() => import('./cpt/cmp.jsx'))
const Sale = React.lazy(() => import('./cpt/sale.jsx'))


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
            <React.Suspense fallback = {<div>loading</div>}>
                <Nav/>
                <NavSub/>
                <div>
                    <Switch>
                        <Route path='/overView' component={OverView}>
                        </Route>
                        <Route path='/ana' component={Ana}/>
                        <Route path='/cmp' component={Cmp}/>
                        <Route path='/sale' component={Sale}/>
                        <Redirect to = '/overView' />
                    </Switch>
                </div>
            </React.Suspense>
            </Router>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector("#root"));