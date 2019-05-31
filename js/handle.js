

 echarts.init(document.getElementById('handle')).setOption({
	title: {
		text: '操作趋势',
		textStyle : {
            color: '#b1c3f8'
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle : {
            color: '#b1c3f8',
        },
    },
    legend: {
        data:['普通','一般','中危','高危'],
        x: 'center',
        y:25,
        textStyle : {
            color: '#fff',
            fontSize: 12,
        },
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '0%',
        containLabel: true
    },
    toolbox: {
        feature: {
            // saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['15','17','19','21','23','01','03','05' , '07','09','11','13','15'],
        axisLabel: {
            textStyle: {
                color: '#b1c3f8',
            }
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '10%'],
        splitLine: {
                show: false
            },
        textStyle : {
            color: '#fff'
        },
        axisLabel: {
            textStyle: {
                color: '#b1c3f8',
            }
        }
    },
    series: [
        {
            name:'普通',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230]
        },
        {
            name:'一般',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310,120, 182, 201, 134, 190, 210]
        },
        {
            name:'中危',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410,120, 132, 101, 134, 40, 230]
        },
        {
            name:'高危',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320,120, 132, 101, 134, 60, 130]
        }
    ]
        })