// import {
//     Scene,
//     AmbientLight,
//     PointLight,
//     WebGLRenderer,
//     PerspectiveCamera,
//     GridHelper,
//     Color, BoxGeometry, Mesh, MeshBasicMaterial,
// } from 'three';
// import * as THREE from 'three';
// import * as Stats from 'stats.js';
// import * as TWEEN from '@tweenjs/tween.js';
// import {
//     FXAAShader,
//     UnrealBloomPass,
//     ShaderPass,
//     FilmPass,
//     OutlinePass,
//     GeometryUtils,
//     CopyShader,
//     ColorifyShader,
//     SepiaShader,
//     OrbitControls,
//     GLTFLoader,
//     EffectComposer,
//     RenderPass,
//     SMAAShader,
//     SMAAPass,
//     ClearMaskPass,
//     MaskPass,
// } from 'three-full';
//
// // three-full和tween以下代码没调用，先展示下调用方式
//
//
// //  渲染器
// export const RENDERER = new THREE.WebGLRenderer(); //  渲染器(去据此){ antialias: true }
// export function initRenderer(doc) {
//     console.log(doc.clientWidth);
//     console.log(doc.clientHeight);
//     RENDERER.setSize(
//         doc.offsetWidth,
//         doc.offsetHeight,
//     );
//     RENDERER.shadowMap.enabled = true; // 辅助线
//     doc.appendChild(RENDERER.domElement);
//
//
// }
//
//
// // 场景
// export const SCENE = new THREE.Scene();
//
// export function initScene() {
//     SCENE.background = new THREE.Color(0xcccccc);
// }
//
// //  灯光
// export function initLight() {
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);    // 全局光
//     ambientLight.position.set(10, 20, 55);   // 灯光
//     SCENE.add(ambientLight);
//
//     // 点光源
//     const pointLight = new THREE.PointLight(0xdddddd);
//     pointLight.distance = 0;
//     CAMERA.add(pointLight);
//     SCENE.add(CAMERA);
// }
//
// //  相机
// export let CAMERA;
// export let CONTROLS;
//
// export function initCamera(doc) {
//     const d = {
//         fov: 400, // 拍摄距离  视野角值越大，场景中的物体越小
//         near: 1, //  最小范围
//         far: 1000, //  最大范围
//     };
//     CAMERA = new THREE.PerspectiveCamera(
//         d.fov,
//         doc.clientWidth / doc.clientHeight,
//         d.near,
//         d.far)
//     ;
//     const p = {
//         x: -20,
//         y: 10,
//         z: -10,
//     };
//     CAMERA.position.set(p.x, p.y, p.z);
//     CAMERA.lookAt(0, 0, 0);
//     CONTROLS = new OrbitControls(CAMERA, RENDERER.domElement);  // 控制镜头
// }
//
//
// //  网格
// export function initGrid() {
//     const gridHelper = new THREE.GridHelper(100, 50);
//     SCENE.add(gridHelper);
// }
//
// export function font() {
//     const loader = new THREE.FontLoader();
//     const a = new FormData();
//
//     loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
//         console.log(font)
//
//         const geometry = new THREE.TextGeometry( 'Hello three.js!', {
//             font: font,
//             size: 80,
//             height: 5,
//             curveSegments: 12,
//             bevelEnabled: true,
//             bevelThickness: 10,
//             bevelSize: 8,
//             bevelSegments: 5
//         } );
//     } );
// }
//
// export let CUBE;
// // 立方体
// export function initBox() {
//     const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//     const material = new THREE.MeshBasicMaterial( { color: 0x448aff } );
//     CUBE = new THREE.Mesh( geometry, material );
//     SCENE.add( CUBE );
//     // CAMERA.position.x = 5;
// }
//
// // 线
// export function material() {
//     const m = new THREE.LineBasicMaterial({color: 0xdddddd})
//     const points = [];
//     points.push( new THREE.Vector3( - 10, 0, 0 ) );
//     points.push( new THREE.Vector3( 0, 10, 0 ) );
//     points.push( new THREE.Vector3( 10, 0, 0 ) );
//     points.push( new THREE.Vector3( 0, -10, 0 ) );
//     points.push( new THREE.Vector3( -10, 0, 0 ) );
//     points.push( new THREE.Vector3( 0, 0, 10 ) );
//     points.push( new THREE.Vector3( 10, 0, 0 ) );
//     points.push( new THREE.Vector3( 0, 0, -10 ) );
//     points.push( new THREE.Vector3( -10, 0, 0 ) );
//
//     const geometry = new THREE.BufferGeometry().setFromPoints( points );
//     const line = new THREE.Line( geometry, m );
//     SCENE.add( line );
//
//     const poi = [];
//     poi.push(new THREE.Vector3(0, 0, -10));
//     poi.push(new THREE.Vector3(0, 10, 0));
//     poi.push(new THREE.Vector3(0, 0, 10));
//     poi.push(new THREE.Vector3(0, -10, 0));
//     poi.push(new THREE.Vector3(0, 0, -10));
//
//     const geo = new THREE.BufferGeometry().setFromPoints(poi);
//     const li = new THREE.Line(geo, m)
//     SCENE.add(li);
//
//     const poi2 = [];
//
//     poi2.push(new THREE.Vector3(0, 10, 0));
//     poi2.push(new THREE.Vector3(0, -10, 0));
//
//     const geo2 = new THREE.BufferGeometry().setFromPoints(poi2);
//     const li2 = new THREE.Line(geo2, m)
//     SCENE.add(li2);
//     RENDERER.render( SCENE, CAMERA );
// }
//
//
// //  性能检测
// export const STATS = new Stats();
//
// export function initStats(doc) {
//     STATS.setMode(0);
//     STATS.domElement.style.position = 'absolute';
//     STATS.domElement.left = '0px';
//     STATS.domElement.top = '0px';
//     doc.appendChild(STATS.domElement);
// }
//
// //  动画混合器组（把模型的动画混合器都push到这里面，在canvas.ts里面更新动画   ）
// export const MIXER = [];
