import React from 'react';
export default class Silder extends React.PureComponent{
    constructor(props) {
        super(props); 
    };
    slide () { 
    }
    componentDidMount(){
        this.slide()
    }
    render(){
        return(
            <div className = 'sliderCon' id=  'slider1'>

            </div>
        )
    }
    
}