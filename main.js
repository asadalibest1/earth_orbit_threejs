import './style.css'

import * as THREE from 'three';
const scene = new THREE.Scene();

const [fov, aspect, near, far] = [65, window.innerWidth / window.innerHeight, .1, 1000];

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const canvas = document.querySelector('#bg');


const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(2);

renderer.render(scene, camera);





// earth .......
const loader = new THREE.TextureLoader();
const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');



const geometry = new THREE.SphereGeometry(.3, 100, 100);
// const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const material = new THREE.MeshPhongMaterial({
  roughness: 1,
  metalness: 0,
  map: THREE.ImageUtils.loadTexture('assets/earthmap1k.jpg'),
  bumpMap: THREE.ImageUtils.loadTexture('assets/earthbump.jpg'),
  bumpScale: .3,
});

const earth = new THREE.Mesh(geometry, material)
scene.add(earth);


// clouds ......
const Cloudsgeometry = new THREE.SphereGeometry(0.31, 100, 100);
const CloudsMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('assets/earthCloud.png'),
  transparent: true,
});
const clouds = new THREE.Mesh(Cloudsgeometry, CloudsMaterial);

scene.add(clouds);

// const a = new THREE.SphereGeometry(2, 64, 64);
// const b = new THREE.MeshBasicMaterial({
//   map: THREE.ImageUtils.loadTexture('assets/galaxy.png'),
//   // side: THREE.BackSide(),
// });
// const background = new THREE.Mesh(
//   a,
//   b
// )

// scene.add(background);



const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 3, 5)
scene.add(pointLight);


const AmbientLight = new THREE.AmbientLight(0xffffff, .2);
scene.add(AmbientLight);


const PointLightHelper = new THREE.PointLightHelper(pointLight);
scene.add(PointLightHelper);

// helper 
// const GridHelper = new THREE.GridHelper(50, 200);
// scene.add(GridHelper);
// console.log(renderer.domElement);
const dom = document.getElementsByClassName('container')[0];

const controls = new OrbitControls(camera, dom);

const animate = () => {
  requestAnimationFrame(animate)

  // earth.rotation.x += 0.01;
  earth.rotation.y -= 0.002;
  clouds.rotation.y -= 0.0001;
  // controls.update();
  // earth.rotation.z += 0.01;

  renderer.render(scene, camera)
};


// handling resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera)
}, false);

const addtstar = () => {
  const geometry = new THREE.SphereGeometry(.1, 200, 200);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);

}

Array(200).fill().forEach(addtstar)

animate();
