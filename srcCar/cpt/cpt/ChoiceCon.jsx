import React, {PureComponent} from 'react';
export default class ChoiceCon extends PureComponent{
    constructor(props) {
        super(props);
    }
    handleChange = (e) =>{
        this.props.handleChange(e.target.id, e.target.value);
    }
    render(){
        let data = this.props.data;
        return(
            <div className = 'AndChoiceSubCon'>
                    <label >{data.labelName}</label>
                    <select onChange = {this.handleChange} id= {data.conId}>
                        {data.choice.map(value => <option key= {value.id} value= {value.id} >{value.text}</option>)}
                    </select>
                </div>
        )
    }
    
}
