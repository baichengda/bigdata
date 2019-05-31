
var dataCount = 5000;
var data = generateData(dataCount);





echarts.init(document.getElementById('status4')).setOption({
	tooltip: {
        trigger: 'axis',
        // position: function (pt) {
        //     return [pt[0], '2%'];
        // }
    },
    title: {
        left: 'left',
        text: '日志状态',
        textStyle : {
            color: '#b1c3f8'
        },
        show: false
    },
    toolbox: {
    	show : false,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.categoryData,
        axisTick: {
        show: false, // y轴的小刻度线
      },
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        show: false
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10,
        show: false,
    }, {
        start: 0,
        end: 100,
        // handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '0%',
        show: false,
        handleStyle: {
            shadowBlur: 3,
            shadowColor: '#fff',
            shadowOffsetX: 2,
            shadowOffsetY: 2,
        },
    }],
    series: [
        {
            name:'日志数据',
            type:'line',
            smooth:true,
            symbol: 'circle',
            // sampling: 'average',
            color: '#fff',
            itemStyle: {
                color: '#fff'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ {
                    offset: 0,
                    color: ['#46bfe9']
                },{
                	offset:1,
                	color: ['#46bfe9']
                }])
            },
            color: ["#46bfe9"],
            data: data.valueData
        }
    ],
})
function generateData(count) {
    var baseValue = Math.random() * 100;
    var time = +new Date(2011, 0, 1);
    var smallBaseValue;

    function next(idx) {
        smallBaseValue = idx % 3 === 0
            ? Math.random() * 170
            : (smallBaseValue + Math.random() * 10 - 250);
        baseValue += Math.random() * 20 - 10;
        return Math.max(
            0,
            Math.round(baseValue + smallBaseValue) + 300
        );
    }

    var categoryData = [];
    var valueData = [];

    for (var i = 0; i < count; i++) {
        categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
        valueData.push(next(i).toFixed(2));
        time += 1000;
    }

    return {
        categoryData: categoryData,
        valueData: valueData
    };
}