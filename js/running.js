

echarts.init(document.getElementById('running')).setOption({
    title: {
	text: '运行态势',
	textStyle : {
            color: '#b1c3f8'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        y: 25,
        data: ['今日态势', '七日平均'],
        textStyle : {
            color: '#b1c3f8',
        },
    },
    
    radar: {
        
            indicator: [
                {text: '活跃用户', max: 100},
                {text: '上传下载', max: 100},
                {text: '操作会话', max: 100},
                {text: '高危操作', max: 100},
                {text: '日志数量', max: 100}
            ],
            radius: 90,
            center: ['50%','65%'],
            name: {
            textStyle: {
                color: '#b1c3f8'
           },
           
        },
        axisLine: {
            lineStyle: {
                color: '#153259',
                },
            },
            splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0,0)', 
        }},// 图表背景的颜色
        
        splitLine: {
            lineStyle: {
                color: [
                    '#153259'
                ]
            }
        },
    },
    series: [
        {
            type: 'radar',
            //  tooltip: {
            //     trigger: 'item'
            // },
            data: [
                {
                    value: [60,10,85,0,90],
                    name: '今日态势',
                    symbol: 'rect',
                    symbolSize: 5,
                    itemStyle: {
                        normal: {
                            color: "#153259",
                            lineStyle: {
                                color: '#2671b8'
                            }
                        }
                    }
                },{
                    value: [90, 90, 90,90, 90],
                    name: '七日平均',
                    itemStyle: {
                        normal: {
                            color: "#f3ca66",
                            lineStyle: {
                                color: '#f3ca66'
                            }
                        }
                    }
                }

            ]
        },
    ]
        });