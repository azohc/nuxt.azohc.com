<template>
  <ClientOnly>
    <div id="threejs-container" ref="container" />
    <template #fallback>
      <p>no 3d in server</p>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const debug = true;

const container = ref<HTMLElement>();
let camera: any;
let scene: any;
let renderer = ref<THREE.WebGLRenderer>();
let letterJ: THREE.Group | undefined;

onMounted(() => {
  init();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-1, 1, 15);

    scene = new THREE.Scene();
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 25, 20);
    scene.add(light);
    debug && scene.add(new THREE.AxesHelper(5));

    const loader = new GLTFLoader();
    loader.load(
      "/models/J.gltf",
      function (gltf) {
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const m = child as THREE.Mesh;
            m.receiveShadow = true;
            m.castShadow = true;
          }
          if ((child as THREE.Light).isLight) {
            const l = child as THREE.Light;
            l.castShadow = true;
            l.shadow.bias = -0.003;
            l.shadow.mapSize.width = 2048;
            l.shadow.mapSize.height = 2048;
          }
        });
        letterJ = gltf.scene;
        scene.add(gltf.scene);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error(error);
      }
    );

    const scaleDown = 1.2;
    renderer.value = new THREE.WebGLRenderer({ alpha: true });
    renderer.value.setSize(
      window.innerWidth / scaleDown,
      window.innerHeight / scaleDown
    );
  }

  function animate() {
    requestAnimationFrame(animate);
    if (letterJ) {
      let increasing = true;
      if (increasing) {
        letterJ.rotation.x += 0.001;
      } else {
        letterJ.rotation.x -= 0.001;
      }
      if (increasing && letterJ.rotation.x >= 0.01) {
        console.log("decr");
        increasing = false;
      } else if (!increasing && letterJ.rotation.x <= -0.01) {
        console.log("incr");
        increasing = true;
      }
    }
    render();
  }

  function render() {
    renderer.value?.render(scene, camera);
    const domElement = renderer.value?.domElement;
    if (!domElement) return;
    container.value?.appendChild(domElement);
  }
});

function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
</script>
