<template>
  <div class="app-container">
    <NavBar />
    <NuxtPage></NuxtPage>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

@media (min-width: 1024px) {
  .app-container {
    display: flex;
    gap: 3rem;
  }
}
</style>
