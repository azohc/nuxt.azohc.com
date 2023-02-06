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

const container = ref<HTMLElement>();
let renderer = ref<THREE.WebGLRenderer>();

onMounted(() => {
  const scene = new THREE.Scene();
  renderer.value = new THREE.WebGLRenderer({ alpha: true });
  const scaleDown = 3;

  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer.value.setSize(
    window.innerWidth / scaleDown,
    window.innerHeight / scaleDown
  );

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.value?.render(scene, camera);
    renderer.value?.domElement;

    const domElement = renderer.value?.domElement;
    domElement && container.value?.appendChild(domElement);
  }

  animate();
});
</script>
