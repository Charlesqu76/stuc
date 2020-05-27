import React from 'react';
import ChoiceCon from './cpt/ChoiceCon.jsx';
import MulChoiceCon from './cpt/MulChoiceCon.jsx';
import EBarHor from './echartCpt/ebarHor.jsx';
import EBarHorSmall from './echartCpt/ebarHorSmall.jsx';
import { Slider } from 'rsuite';

export default class Sale extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            value: [4, 8]
        }
        
    }

    render(){
        return(
            <div className = 'saleCon'>
                <div className = 'saleCho'>
                    <div className = 'saleChoFir'>
                        <div className = 'saleChoFirLeft'>
                            <ChoiceCon handleChange = {this.handleChange} data={{labelName: '外形',conId: 'shape',choice:[{id: 'suv', text: 'SUV'},{id: 'car', text: '轿车'}]}}/>
                            <ChoiceCon handleChange = {this.handleChange} data={{labelName: '外形',conId: 'shape',choice:[{id: 'suv', text: 'SUV'},{id: 'car', text: '轿车'}]}}/>
                            <ChoiceCon handleChange = {this.handleChange} data={{labelName: '外形',conId: 'shape',choice:[{id: 'suv', text: 'SUV'},{id: 'car', text: '轿车'}]}}/>
                        </div>
                        <div className = 'saleChoFirRight'>
                            <button className ='saleParaRemake'>参数重制</button>
                        </div>
                    </div>
                    <div className = 'saleChoSec'>
                        <Slider />
                    </div>
                    <div className = 'saleChoThi'>
                        <MulChoiceCon/>
                    </div>
                </div>
                <div className = 'salebody'>
                    <div className = 'cmpBodyFir'>
                        <EBarHor id= 'barHor1' />
                    </div>
                    <div className = 'cmpBodySec'>
                        <EBarHorSmall id= 'barHorsmall1' />
                        <EBarHorSmall id= 'barHorsmall2' />
                    </div>
                    
                </div>
            </div>
        )
    }
    
}
