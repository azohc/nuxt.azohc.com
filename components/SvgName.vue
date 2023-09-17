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
  <h1 ref="nameHeading">
    hi, I'm
    <div
      ref="nameDiv"
      class="name"
      @mouseenter="dosomething"
      @mouseleave="stop"
    >
      <picture>
        <source
          media="(prefers-color-scheme: light)"
          srcset="~/assets/svg/j-dark.svg"
        />
        <img src="~/assets/svg/j-light.svg" alt="j" />
      </picture>
      <picture>
        <source
          media="(prefers-color-scheme: light)"
          srcset="~/assets/svg/u-dark-1.svg"
        />
        <img src="~/assets/svg/u-light-1.svg" alt="u" />
      </picture>
      <picture>
        <source
          media="(prefers-color-scheme: light)"
          srcset="~/assets/svg/a-dark-1.svg"
        />
        <img src="~/assets/svg/a-light-1.svg" alt="a" />
      </picture>
      <picture>
        <source
          media="(prefers-color-scheme: light)"
          srcset="~/assets/svg/n-dark.svg"
        />
        <img src="~/assets/svg/n-light.svg" alt="n" />
      </picture>
    </div>
  </h1>
</template>

<style scoped>
h1 {
  font-size: 3.3rem;
  text-align: center;
}

.name {
  display: flex;
  flex-direction: column;

  & > :nth-child(2) {
    transform: scale(0.9);
  }

  > picture {
    margin-inline: auto;
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

@media (min-width: 1024px) {
  h1 {
    text-align: start;
  }
  .name {
    display: inline-block;
  }
}
</style>
