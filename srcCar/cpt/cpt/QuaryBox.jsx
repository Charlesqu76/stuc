import React from 'react';
import {withRouter} from "react-router";

export default class QuaryBox extends React.PureComponent{
    constructor(props) {
        super(props);
    }
    siblings = (id) =>{
        let chosenClassName = 'chosen'
        let choiceEle = document.getElementById(id);
        choiceEle.classList.add(chosenClassName);
        let elseSib = choiceEle.parentNode.children;
        let elseSibLen = elseSib.length
        for (var i = 0; i < elseSibLen; i++) {
            if (elseSib[i] !== choiceEle) {
                elseSib[i].classList.remove(chosenClassName)
            }
        }
    }
    handlePower = (e) =>{
        this.props.handlePower(e.target.id);
        this.siblings(e.target.id);
        e.stopPropagation();
    }
    render(){
        return(
            <div className ='quaryBoxCon'>
                <label >{this.props.data.labelName}</label>
                <div className= 'quaryBoxChice'>
                    {this.props.data.choice.map(value => <div key={value.id} id={value.id} 
                    className={value.id === this.props.data.dafault? 'shapeName chosen': 'shapeName' } 
                    onClick = {this.handlePower}>{value.text}</div>)}
                </div>
            </div>
        )
    }    
}