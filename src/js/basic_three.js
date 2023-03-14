import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
let scene, cube,camera, renderer;
let axesHelper,controls;

init();
render();
function init(){
    /*创建scene，以及物体*/
    scene = new THREE.Scene();//容器
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color:0xffff00});
    cube = new THREE.Mesh(geometry,material);//mesh:物体
    scene.add(cube);
    //显示坐标轴
    axesHelper = new THREE.AxesHelper(3);
    scene.add(axesHelper);
    //x红色 y绿色 z蓝色
    //创建camera
    camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.z = 5;
    camera.position.x = 2;

    //创建renderer
    renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //4控制器
    controls = new OrbitControls(camera,renderer.domElement);

}
function render(){
    renderer.render(scene,camera);
    cube.rotation.y +=0.01;
    requestAnimationFrame(render);
}