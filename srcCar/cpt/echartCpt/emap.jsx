import React from 'react';
let echarts = require('echarts');
let china = require('./china');

export default class EMap extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var myChart = echarts.init(document.getElementById(this.props.id));
            let data = [{
                'name': '北京',
                'value': 30319.98
            },
            {
                'name': '天津',
                'value': 18809.64
            },
            {
                'name': '河北',
                'value': 36010.27
            },
            {
                'name': '山西',
                'value': 16818.11
            },
            {
                'name': '内蒙古',
                'value': 17289.22
            },
            {
                'name': '辽宁',
                'value': 25315.35
            },
            {
                'name': '吉林',
                'value': 15074.62
            },
            {
                'name': '黑龙江',
                'value': 16361.62
            },
            {
                'name': '上海',
                'value': 32679.87
            },
            {
                'name': '江苏',
                'value': 92595.4
            },
            {
                'name': '浙江',
                'value': 56197.15
            },
            {
                'name': '安徽',
                'value': 30006.82
            },
            {
                'name': '福建',
                'value': 35804.04
            },
            {
                'name': '江西',
                'value': 21984.78
            },
            {
                'name': '山东',
                'value': 76469.67
            },
            {
                'name': '河南',
                'value': 48055.86
            },
            {
                'name': '湖北',
                'value': 39366.55
            },
            {
                'name': '湖南',
                'value': 36425.78
            },
            {
                'name': '广东',
                'value': 97277.77
            },
            {
                'name': '广西',
                'value': 20352.51
            },
            {
                'name': '海南',
                'value': 4832.05
            },
            {
                'name': '重庆',
                'value': 20363.19
            },
            {
                'name': '四川',
                'value': 40678.13
            },
            {
                'name': '贵州',
                'value': 14806.45
            },
            {
                'name': '云南',
                'value': 17881.12
            },
            {
                'name': '西藏',
                'value': 1477.63
            },
            {
                'name': '陕西',
                'value': 24438.32
            },
            {
                'name': '甘肃',
                'value': 8246.07
            },
            {
                'name': '青海',
                'value': 2865.23
            },
            {
                'name': '宁夏',
                'value': 3705.18
            },
            {
                'name': '新疆',
                'value': 12199.08
            }
            ];
            var yData = [];
            data.sort(function(o1, o2) {
            if (isNaN(o1.value) || o1.value == null) return -1;
            if (isNaN(o2.value) || o2.value == null) return 1;
            return o1.value - o2.value;
            });

            for (var i = 0; i < data.length; i++) {
            yData.push(data[i].name);
            }
            let option = {
            title: {
                text: '营销力得分全球分布',
                textStyle: {
                    fontSize: 20,
                },
                x: 'center'
            },
            tooltip: {
                show: true,
                formatter: function(params) {
                    return params.name + '：' + params.data['value']
                },
            },
            visualMap: {
                type: 'continuous',
                text: ['1', '2'],
                orient: 'horizontal',
                align: 'bottom',
                showLabel: true,
                seriesIndex: [0],
                min: 1000,
                max: 100000,
                inRange: {
                    color: ['#8FC6DA','#07114A'],
                },
                textStyle: {
                    color: '#000'
                },

                left: '3%',
                right: '90%',
                bottom: '5%',
            },
            geo: {
                roam: false,
                map: 'china',
                left: '0%',
                right: '0%',
                top: '10%',
                bottom: '0%',
                layoutSize: '100%',
                emphasis:{
                    itemStyle:{
                        color: 'black',
                    },
                    labelStyle:{
                        text: 'fad',
                    }

                },
                regions: [{
                    name: '南海诸岛',
                    value: 0,
                    itemStyle: {
                        normal: {
                            opacity: 0,
                            label: {
                                show: true
                            }
                        }
                    }
                }],
            },
            series: [{
                name: 'mapSer',
                type: 'map',
                roam: false,
                geoIndex: 0,
                label: {
                    show: false,
                },
                roam: false,
                data: data
            }]
            };
        myChart.setOption(option);
        window.addEventListener("resize", function(){
            myChart.resize();
        })
    }

    render(){
        console.log(document.querySelector("#"+ this.props.id))
        return(
            <div id={this.props.id} style={{ width: '100%', height: '100%'}}></div>
        )
    }
    

} 