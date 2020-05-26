import React from 'react';
var echarts = require('echarts');

export default class ERadar extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let myChart = echarts.init(document.getElementById(this.props.id));
        let option = {
            color: ['#4F81BD','#C6D9F1','#9BBB59'],
            title:{
                text:'销量',
                textStyle: {
                    fontSize: 20,
                },
                left: 'center',
            },
            legend: {
                top: 30,
                left: 'center',
                data: ['全国', '广东'],
                itemGap: 20,
                textStyle: {
                    color: '#000000',
                    fontSize: 14
                },
            },
            radar: {
                indicator: [
                    {name: '产品', max: 4},
                    {name: '价格', max: 4},
                    {name: '促销', max: 4},
                    {name: '渠道', max: 4},
                    {name: '人员', max: 4},
                    {name: '流程', max: 4},
                    {name: '数组/生态化', max: 4}
                ],
                shape: 'roundRect',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: '#000000'
                    }
                },
            },
            series:[
            {
                name: '全国',
                type: 'radar',
                data: [[3,4,2.5,2,3,3,2]],
                symbol: 'none',
                lineStyle: {
                    color: '#4F81BD',
                    width: 5,
                },        
            },
            {
                name: '广东',
                type: 'radar',
                data: [[2,2.5,2.5,4,3,2,3]],
                symbol: 'none',
                lineStyle: {
                    color: '#C6D9F1',
                    width: 5,

                } 
            }
            ]
        };
        myChart.setOption(option);
    }

    render(){
        return(
            <div id={this.props.id} style={{ width: 300, height: 400 }}></div>
        )
    }
}