import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as echarts from 'echarts';

import world from 'echarts/map/js/world.js';
import 'echarts/map/js/china';
import 'echarts/map/js/province/henan';

@Component({
    selector: 'app-echarts',
    templateUrl: './echarts.component.html',
    styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements OnInit {
    a = 10

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

    option = {};

    constructor(
        private http: HttpClient
    ) {
        setTimeout(() => this.a = 11, 10);
    }

    ngOnInit() {
        const arr = [1, 2, 3, 4];
        for (const numberKey in arr) {
            if (numberKey) {
                console.log(numberKey);
            }
        }

        this.http.get('../../assets/amap/jiaozuo.json')
            .subscribe(geoJson => {
                echarts.registerMap('jiaozuo', geoJson);
                this.option = {
                    title: {
                        text: '焦作',
                    },
                    backgroundColor: '#ddd',
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}<br/>{c} (p / km2)'
                    },
                    // visualMap: {
                    //     min: 800,
                    //     max: 50000,
                    //     text: ['High', 'Low'],
                    //     realtime: false,
                    //     calculable: true,
                    //     inRange: {
                    //         color: ['lightskyblue', 'yellow', 'orangered']
                    //     }
                    // },
                    series: [
                        {
                            name: 'map',
                            type: 'map',
                            mapType: 'jiaozuo', // map type should be registered
                            boxDepth: 100,
                            regionHeight: 10,
                            scaleLimit: {
                                min: 1,
                                max: 10
                            },
                            itemStyle: {
                                normal: { label: { show: true } },
                                emphasis: {
                                    areaColor: '#448aff',
                                    label: {
                                        show: true,
                                        color: '#fff'
                                    },
                                    itemStyle: {
                                        shadowColor: '#000'
                                    }
                                },
                            },
                            data: [
                                { name: '中站区', value: 20057.34 },
                                { name: '马村区', value: 15477.48 },
                                { name: '山阳区', value: 15477.48 },
                                { name: '修武县', value: 15477.48 },
                                { name: '博爱县', value: 15477.48 },
                                { name: '武陟县', value: 15477.48 },
                                { name: '温县', value: 15477.48 },
                                { name: '沁阳市', value: 15477.48 },
                                { name: '孟州市', value: 15477.48 },
                            ],
                            nameMap: {
                                'jiaozuo' : '焦作'
                            },
                            shading: 'realistic',
                            // 真实感材质相关配置 shading: 'realistic'时有效
                            realisticMaterial: {
                                detailTexture: '#fff', // 纹理贴图
                                textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
                                roughness: 0, // 材质粗糙度，0完全光滑，1完全粗糙
                                metalness: 0, // 0材质是非金属 ，1金属
                                roughnessAdjust: 0
                            },
                            viewControl: {
                                distance: 150,// 地图视角 控制初始大小
                                rotateSensitivity: 1,// 旋转
                                zoomSensitivity: 1,// 缩放
                            },
                        }
                    ]
                };
            });
    }

}
