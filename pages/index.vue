<template>
  <!-- // TODO ADD ANIMATIONS! -->
  <main>
    <h1>
      hi, I'm
      <div class="name">
        <img src="~/assets/svg/j-thick.svg" alt="j" />
        <img src="~/assets/svg/u-thick-1.svg" alt="u" />
        <img src="~/assets/svg/a-thick-1.svg" alt="a" />
        <img src="~/assets/svg/n-thick.svg" alt="n" />
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
  filter: invert();
}

.name > :nth-child(2) {
  transform: scale(0.88);
}
</style>
