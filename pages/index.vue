<script setup lang="ts">
const nameHeading = ref(null);
const nameDiv = ref(null);
let yOffset = 1;
let zIndex = -1;
let opacity = 0.88;

const cloneRefs: HTMLDivElement[] = [];
let spamInterval: NodeJS.Timer;

const dosomething = () => {
  spamInterval = setInterval(generateClones, 100);
};

const generateClones = () => {
  if (!nameDiv.value || !nameHeading.value || opacity < 0.01) {
    return;
  }
  const div = nameDiv.value as HTMLDivElement;
  const heading = nameHeading.value as HTMLHeadingElement;

  const { x, y } = div.getBoundingClientRect();
  const clone = div.cloneNode(true) as HTMLDivElement;

  clone.classList.add("cloned-name");
  clone.style.left = `${x}px`;
  clone.style.top = `${Math.floor(y) + yOffset}px`;
  clone.style.zIndex = "" + zIndex;
  clone.style.opacity = "" + opacity;

  yOffset *= 1.33;
  zIndex -= 1;
  opacity *= 0.77;

  heading.append(clone);
  cloneRefs.push(clone);
};

let timeToRemove = 1100;
const stop = () => {
  clearInterval(spamInterval);
  const executionBlock = [...cloneRefs].reverse();
  executionBlock.forEach((clone, index) =>
    setTimeout(() => clone.remove(), timeToRemove - 50 * index)
  );
  yOffset = 1;
  opacity = 0.88;
  timeToRemove = 1100;
};
</script>

<template>
  <main>
    <h1 ref="nameHeading">
      hi, I'm
      <div
        ref="nameDiv"
        class="name"
        @mouseenter="dosomething"
        @mouseleave="stop"
      >
        <img src="~/assets/svg/j-b-thick.svg" alt="j" />
        <img src="~/assets/svg/u-b-thick-1.svg" alt="u" />
        <img src="~/assets/svg/a-b-thick-1.svg" alt="a" />
        <img src="~/assets/svg/n-b-thick.svg" alt="n" />
      </div>
    </h1>

    a <code>full stack developer</code> in the making
  </main>
</template>

<style scoped>
h1 {
  font-size: 3.3rem;
}

.name {
  display: inline-block;
}
.name > :nth-child(2) {
  transform: scale(0.88);
}

@media (prefers-color-scheme: dark) {
  .name {
    filter: invert();
  }
}

@keyframes sink {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(5px);
  }
}
.cloned-name {
  position: absolute;
  animation: sink 3.3s;
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
