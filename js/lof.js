echarts.init(document.getElementById('LOF')).setOption({
	title: {
		text: 'LOF 散点',
		textStyle : {
            color: '#b1c3f8'
        },
        x: "left",
        y: 0,
        top: 0
    },
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#1b4566'
            }
        },
        axisLine: {
                lineStyle: {
                    color: '#526392'
                }
            },
        axisLabel: {
        textStyle: {
            color: '#b1c3f8'
        }
        },
        gridIndex: 0,
        min: 0,
        max: 20
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#1b4566'
            }
        },
        axisLine: {
                lineStyle: {
                    color: '#526392'
                }
            },
        axisLabel: {
            textStyle: {
                color: '#b1c3f8',
            }
        },
        gridIndex: 0, 
        min: 0, 
        max: 40
    },
    grid: [
        {x: '13%', y: '22%', width: '100%', height: '70%'},
    ],
    
    series: [{
        data: [
            [1, 3],
            [3, 2],
            [4, 2],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
        type: 'scatter',
        color: ["#eab72a"]
    }],	
});