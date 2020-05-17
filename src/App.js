import React from 'react'
import Login from "./Component/Login.jsx";
import Reg from "./Component/Reg.jsx";
import HcCom from "./Component/HcCom.jsx";
import webpage404 from './Component/404.jsx';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom" ;


export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/login' exact component={Login}/>
                        <Route path="/reg" exact component={Reg}/>
                        <Route path="/huche" exact component={HcCom}/>
                        <Route path="" component={webpage404}/>
                        <Redirect to={'/huche'}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}


