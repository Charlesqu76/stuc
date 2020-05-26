import React from 'react'
import TopNav from './TopNav.jsx'
import Hc from './Hc.jsx'
import axios from 'axios';

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
        console.log(this.state.data);
        return(
            <div>
              <TopNav user = {true}/> 
              {this.state.data ? <Hc data = {this.state.data}/> : <></>}
            </div>
        )
    }
}