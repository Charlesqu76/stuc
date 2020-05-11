import React from 'react'
import Login from "./Component/Login.jsx";
import Reg from "./Component/Reg.jsx";
import HcCom from "./Component/HcCom.jsx";
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
                        <Route path='/login' component={Login}/>
                        <Route path="/reg" component={Reg}/>
                        <Route path="/huche" component={HcCom}/>
                        <Redirect to={'/huche'}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}


