import TopNav from "./TopNav.jsx";
import React from 'react';
import PostCon from "./PostCon.jsx";
import Hc from "./Hc.jsx";
import {Route} from "react-router-dom";
import axiso from 'axios';

export default class HcCom extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        return (
            <div>
                <TopNav user={true}/>
                <div className='HcComBody'>
                    <PostCon/>
                    <HcList/>
                </div>
            </div>
        );
    }
}

class HcList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
        }
    }
    componentDidMount() {
        axiso.get("http://127.0.0.1:8000/huche/")
            .then( res => {
                if (res.status === 200 && res.data){
                    let arr = [];
                    let hucheData = res.data.data;
                    for (let o in hucheData){
                        arr.push(hucheData[o]);
                    }
                    this.setState({dataList: arr});
                }
            })
            .catch( e => console.error(e));
    }
    render() {
        return (
            <div>
                {this.state.dataList.map((value) => <Hc key = {value.id} data = {value}/>)}
            </div>
        );
    }

}