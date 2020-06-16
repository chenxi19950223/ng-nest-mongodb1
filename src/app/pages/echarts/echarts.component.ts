import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-echarts',
    templateUrl: './echarts.component.html',
    styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements OnInit {

    posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ];

    labelOption = {
        show: true,
        formatter: '{c}  {name|{a}}',
        fontSize: 12,
        align: 'left',
        position: 'insideBottom',
        verticalAlign: 'middle',
        rotate: 90,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    };

    option = {
        title: {
            text: '单位/人数'
        },
        color: ['#003366', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['民警', '辅警']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            // feature: {
            //     mark: {show: true},
            //     dataView: {show: true, readOnly: false},
            //     magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            //     restore: {show: true},
            //     saveAsImage: {show: true}
            // }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: ['2012', '2013', '2014', '2015', '2016']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '民警',
                type: 'bar',
                barGap: 0,
                label: this.labelOption,
                data: [320, 332, 301, 334, 390]
            },
            {
                name: '辅警',
                type: 'bar',
                label: this.labelOption,
                data: [98, 77, 101, 99, 40]
            }
        ]
    };

    constructor() {
    }

    ngOnInit() {
        const arr = [1, 2, 3, 4];
        for (const numberKey in arr) {
            if (numberKey) {
                console.log(numberKey);
            }
        }
    }

}
