import React from 'react';

export default class MulChoiceCon extends React.PureComponent{
    constructor(props) {
        super(props);
        
    }

    mulChoiceClick = (e) =>{
        {e.target.className.search('mulchoiceSingleChosen') != -1 ? 
        e.target.className = 'mulchoiceSingle':
        e.target.className = 'mulchoiceSingle mulchoiceSingleChosen';}
    }
    
    render(){
        return(
            <div className = 'mulChoiceCon'>
                <label>可选竞品车型</label>
                <div className = 'mulChoice'>
                    <div className = 'mulchoiceSingle' onClick = {this.mulChoiceClick}>车型1</div>
                    <div className = 'mulchoiceSingle' onClick = {this.mulChoiceClick}>车型2</div>
                    <div className = 'mulchoiceSingle' onClick = {this.mulChoiceClick}>车型3</div>
                    <div className = 'mulchoiceSingle' onClick = {this.mulChoiceClick}>车型4</div>
                    <div className = 'mulchoiceSingle' onClick = {this.mulChoiceClick}>车型5</div>
                </div>
            </div>
        )
    }
}