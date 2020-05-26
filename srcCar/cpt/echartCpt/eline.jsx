import React from 'react';
var echarts = require('echarts');
// import echarts from 'echarts/lib/echarts';
// import  'echarts/lib/chart/line';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/legend';
// import { color } from 'echarts/lib/export';

export default class ELine extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var myChart = echarts.init(document.getElementById(this.props.id));
        let option = {
            color: ['#4F81BD','#C6D9F1','#9BBB59'],
            title:{
                text:'销量',
                textStyle: {
                    fontSize: 20,
                },
                left: 'center',
                top: 0,
            },
            tooltip:{
                trigger: 'axis'
            },
            legend:{
                data: [{
                    name: '全国',
                    //icon:'image://../wwwroot/js/url2.png', //路径
                },
                {
                    name: '广东',
                }
            ],                top: '2%',
                right: '10%',
            },
            grid: {
                left: "0%",
                right: '0%',
                top: '30',
                bottom: '0%',
                containLabel: true,
            },
            xAxis:{
                type: 'category',
                data:["201905","201906","291907","291908",'291909','291910','201911'],
                axisLine:{
                    show: false,
                },
                axisTick:{
                    show: false,
                }
            },
            yAxis:{
                axisLine: {
                    show: false,
                },
                splitLine:{
                    lineStyle:{
                        color: '#D9D9D9'
                    }
                },
                axisLabel:{
                    color: 'black',
                },
                axisTick:{
                    show: false,
                }
            },
            boundaryGap: false,
            series:[
            {
                name:'全国',
                type:'line',
                data:[180,420,333,83,12,232,134],
                lineStyle:{
                    width:5,
                },
                showSymbol: false,
            
            },
            {
                name:'广东',
                type:'line',
                data:[125,330,230,60,123,223,21],
                lineStyle:{
                    width:5,
                },
                showSymbol: false,

            }
            ]
        };
        myChart.setOption(option);
    }

    render(){
        return(
            <div id={this.props.id} style={{ width: 700, height: 150}}></div>
        )
    }
    

} 