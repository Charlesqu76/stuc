import React from 'react';

export default class MulChoiceCon extends React.PureComponent{
    constructor(props) {
        super(props);
        
    }
    
    render(){
        return(
            <div className = 'mulChoiceCon'>
                <label>可选竞品车型</label>
                <div className = 'mulChoice'>
                    <div className = 'mulchoice'>车型1</div>
                    <div className = 'mulchoice'>车型2</div>
                    <div className = 'mulchoice'>车型3</div>
                    <div className = 'mulchoice'>车型4</div>
                    <div className = 'mulchoice'>车型5</div>
                </div>
            </div>
        )
    }
}