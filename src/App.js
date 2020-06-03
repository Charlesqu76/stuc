import React from 'react'
import Login from './Login/Login.jsx';
import Reg from "./regist/Reg.jsx";
import HcCom from "./huche/Huche.jsx";
import webpage404 from './404/404.jsx';
import DetailPage from './detailPage/DetailPage.jsx';
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


