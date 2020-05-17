import React from 'react';
import TopNav from "./TopNav.jsx";


export default class webpage404 extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <TopNav/>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <header style= {{ fontSize: 50}}>
                        404
                    </header>
                    <div style={{fontSize: 40}}>
                        Page Not Found
                    </div>
                </div>
            
            </div>
        )
    }
}