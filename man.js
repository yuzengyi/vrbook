import * as THREE from 'three';
import { Color } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
let scene, cube,camera, renderer;
let axesHelper,controls;

initRenderer();
initScene();
initAxesHelper();

initCamera();

initLight();
initMeshes();

initControls();

animate();

window.addEventListener('resize',function(){
    camera.aspect = window.innerWidth / this.window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
})
function initRenderer(){
    renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function initControls(){
    const controls = new OrbitControls(camera,renderer.domElement);
}
function initScene(){
    scene = new THREE.Scene();
    scene.background = new Color(0xa0a0a0);
}

function initAxesHelper(){
    const axesHelper = new THREE.AxesHelper(1);
    scene.add(axesHelper);
}

function initLight(){
   const hemiLight = new THREE.HemisphereLight(0xffffff,0x444444);
   scene.add(hemiLight);
}

function initMeshes(){
    const loader = new GLTFLoader();
    // loader.load('models/gltf/tokyo.glb',function(gltf){
    //     //console.log(gltf);
    //     scene.add(gltf.scene);
    // });
    loader.load('models/gltf/man.glb',function(gltf){
        //console.log(gltf);
        scene.add(gltf.scene);
    });
}

function initCamera(){
    camera = new THREE.PerspectiveCamera(
        45,Window.innerWidth / Window.innerHeight,1,1000);
    camera.position.set(1,2,-3);
}
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}
// function init(){
//     /*创建scene，以及物体*/
//     scene = new THREE.Scene();//容器
//     const geometry = new THREE.BoxGeometry(1,1,1);
//     const material = new THREE.MeshBasicMaterial({color:0xffff00});
//     cube = new THREE.Mesh(geometry,material);//mesh:物体
//     scene.add(cube);
//     //显示坐标轴
//     axesHelper = new THREE.AxesHelper(3);
//     scene.add(axesHelper);
//     //x红色 y绿色 z蓝色
//     //创建camera
//     camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
//     camera.position.z = 5;
//     camera.position.x = 2;

//     //创建renderer
//     renderer = new THREE.WebGL1Renderer();
//     renderer.setSize(window.innerWidth,window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//     //4控制器
//     controls = new OrbitControls(camera,renderer.domElement);

// }
// function render(){
//     renderer.render(scene,camera);
//     cube.rotation.y +=0.01;
//     requestAnimationFrame(render);
// }