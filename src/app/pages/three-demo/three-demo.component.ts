import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import {
    initRenderer,
    initCamera,
    initScene, initLight,
    initGrid, initStats,
    RENDERER, CAMERA, SCENE, CONTROLS, STATS, MIXER, initBox, CUBE, material, font,
} from '../../base';
import {
    FXAAShader,
    UnrealBloomPass,
    ShaderPass,
    FilmPass,
    OutlinePass,
    GeometryUtils,
    CopyShader,
    ColorifyShader,
    SepiaShader,
    OrbitControls,
    GLTFLoader,
    EffectComposer,
    RenderPass,
    SMAAShader,
    SMAAPass,
    ClearMaskPass,
    MaskPass,
} from 'three-full';
import * as  TWEEN from '@tweenjs/tween.js';
import { Vector2, Group, Scene, SphereGeometry, ImageUtils, AnimationMixer, Clock } from 'three';

@Component({
    selector: 'app-three-demo',
    templateUrl: './three-demo.component.html',
    styleUrls: ['./three-demo.component.scss'],
})
export class ThreeDemoComponent implements OnInit, AfterViewInit {

    @ViewChild('can', {static: true}) canRef: ElementRef<HTMLDivElement>;

    thing;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            initRenderer(this.canRef.nativeElement);
            initCamera(this.canRef.nativeElement);
            initScene();
            initLight();
            initGrid();
            material();
            font();
            initBox();
            initStats(this.canRef.nativeElement);

            //  加载模型-star
            this.importantModel();
            //  加载模型-end

            //  渲染场景
            const delta = new Clock();
            const rendererOut = () => {

                requestAnimationFrame(rendererOut);
                CUBE.rotation.x += 0.01;
                CUBE.rotation.y -= 0.01;
                RENDERER.render(SCENE, CAMERA);
                CONTROLS.update();
                STATS.update();
                if (MIXER) {
                    MIXER.map(r => {
                        r.update(delta.getDelta());
                    });
                }
            };

            rendererOut();
        }, 1000);
    }

    // 这个模型可以使用blender2.8(正处于beta版) 直接导出gltf
    importantModel() {
        const loader = new GLTFLoader();
        loader.load('assets/model/1.gltf', (gltf) => {
                console.log(gltf);

                gltf.scene.traverse((child) => {  // 遍历判断Mesh
                    if (child.isMesh) {
                        console.log(child);
                        child.material.color = { r: 1, g: 2, b: 3 };    //  颜色
                        child.material.metalness = 0.8;   //  金属度
                        gltf.scene.background = 'rgba(0,0,0, 0.5)';
                        gltf.scene.translateX(5);
                        this.thing = gltf.scene;
                        SCENE.add(this.thing);
                    }
                });

            },
            undefined,
            (error) => {
                console.error(error);
            });
    }

}
