import React from 'react'
import Login from "./Component/Login.jsx";
import Reg from "./Component/Reg.jsx";
import HcCom from "./Component/HcCom.jsx";
import webpage404 from './Component/404.jsx';
import DetailPage from './Component/DetailPage.jsx'
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom" ;


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={HcCom}/>
                        <Route path='/login' exact component={Login}/>
                        <Route path="/reg" exact component={Reg}/>
                        <Route path="/huche" exact component={HcCom}/>
                        <Route path="/huche/:id" exact component={DetailPage}/>
                        <Route path="" component={webpage404}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}


