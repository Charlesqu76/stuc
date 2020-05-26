import React, { Fragment } from 'react';
let echarts = require('echarts');

export default class EBarHorSmall extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let myChart = echarts.init(document.getElementById(this.props.id));
        let option = {
            color: ['#4F81BD','#C6D9F1','#9BBB59'],
            title: {
                text: '营销力细节分析',
                left: 'center',
                textStyle: {
                    fontSize: 20,
                }
            },
            tooltip: { //提示框组件
                trigger: 'axis',
                formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                top: '70',
                containLabel: true,
            },
            legend: { //图例组件，颜色和名字
                right: 'center',
                top: '30',
                itemWidth: 12,
                itemHeight: 10,                
                data: ['车型1','参照车型'],
                textStyle: {
                    color: '#a8aab0',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            xAxis: [{
                type: 'category',
                data: ['当前销量','预计销量'],
                axisLabel: { 
                    textStyle: {
                        color: '#000000',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    },
                },
                axisTick: { //坐标轴刻度相关设置。
                    show: false,
                },
                axisLine: { 
                    show: true,//坐标轴轴线相关设置
                    lineStyle: {
                        color: '#D9D9D9',
                    }
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: false,
                }
            }],
            yAxis: [{
                type: 'value',
                splitNumber: 5,
                axisLabel: {
                    show: true,
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                }
        
            }],
            series: [{
                    name: '车型1',
                    type: 'bar',
                    data: [10, 15],
                    barWidth: 30,
                    barGap: 0.3, //柱间距离
                    label: { //图形上的文本标签
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#000000',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        },
        
                    },
                },
                {
                    name: '参照车型',
                    type: 'bar',
                    data: [8, 5],
                    barWidth: 30,
                    barGap: 0.3, //柱间距离
                    label: { //图形上的文本标签
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#000000',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        },
        
                    },
                }
                
            ]
        };
        myChart.setOption(option);
    }

    render(){
        return(
            <Fragment>
                <div id={this.props.id} style={{ width: 450 , height: 200}}></div>

            </Fragment>
            
        )
    }
    

} 