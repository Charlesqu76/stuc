import React from 'react'
import Hc from '../Component/hcCon/Hc.jsx'
import axios from 'axios';
import TopNav from '../Component/topNav/TopNav.jsx';

const baseUrl = 'http://127.0.0.1:8000';
export default class DetailPage extends React.Component{
    constructor(){
        super();
        this.state = {
            data: null,
        }
    }

    componentDidMount(){
        let url = baseUrl + this.props.location.pathname;
        axios.get(url)
        .then(res => this.setState({data: res.data.data}))
        .catch(error => console.log(error))
    }
    render(){
        return(
            <div>
              {this.state.data ? <Hc data = {this.state.data} detail = {true}/> : <></>}
            </div>
        )
    }
}