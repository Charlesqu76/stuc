import React, { Fragment } from 'react';
import QuaryBox from './cpt/QuaryBox.jsx'
export default class OverView extends React.Component{
    constructor(props) {
        super(props);
        
    }
    render(){
        return(
            <Fragment>
                <QuaryChoice/>
                 <QuaryTable/>
            </Fragment>
           
        )
    }
}
class QuaryChoice extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            brand: 'audi',
            shape: 'suv',
            power: 'fuel',
        }
    }
    componentDidMount(){
        console.log("asf");
    }
    brandChange = (e) => {
        this.setState({brand: e.target.value})
    }
    shapeClike = (id) =>{
        this.setState({shape: id});
    }
    powerClick = (id) => {
        this.setState({power: id});
    }

    render(){
        console.log(this.state);
        return(
            <div className = 'quaryChoiceCon'>
                <div className = 'brandCon'>
                    <label >品牌</label>
                    <select id = 'brand' onChange={this.brandChange} value = {this.state.brand}>
                        <option value= 'audi' >奥迪</option>
                        <option value= 'benchi' >奔驰</option>
                    </select>
                </div>
                <QuaryBox data = {{labelName: "外形",dafault: 'suv',choice: [{id: 'suv', text:"SUV"},{id: 'limousine', text: "轿车"},{id: 'mpv', text:"MPV"}]}} 
                handlePower = {this.shapeClike}/>
                <QuaryBox data = {{labelName: "动力",dafault: 'fuel', choice: [{id: 'fuel', text:"燃油车"},{id: 'hybird', text: "混动"},{id: 'new', text:"新能源"}]}} 
                handlePower = {this.powerClick}/>
            </div>
        )
    }
}


class QuaryTable extends React.Component{
    constructor(props) {
        super(props);       
    }
    render(){
        return(
            <div className="tableCon">
                <table className ='overViewTable'>
                    <tbody>
                        <tr className= 'tableHeader'>
                            <th>车型</th>
                            <th>销量</th>
                            <th>售价均值<p>（万）</p></th>
                            <th>环比变化<p>（万）</p></th>
                            <th>营销力得分</th>
                            <th>同级排名</th>
                            <th>环比变化</th>
                            <th>同级第一</th>
                            <th>市场预测</th>
                            <th>详细</th>
                        </tr>
                        <QuaryTableData/>
                    </tbody>
                </table>
            </div>
        )
    }
}

class QuaryTableData extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
        <Fragment>
            <tr>
                <td>Q1</td>
                <td>131232</td>
                <td>112</td>
                <td>12</td>
                <td>2.4</td>
                <td>3/11</td>
                <td>1</td>
                <td>宝马</td>
                <td>预计明年..</td>
                <td>点击查看</td>
            </tr>
        </Fragment>)
    
    }    
}


