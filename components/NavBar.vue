<template>
  <nav>
    <NuxtLink active-class="current-route" to="/">home</NuxtLink>
    <NuxtLink active-class="current-route" to="/projects"> projects </NuxtLink>
    <NuxtLink active-class="current-route" to="/about">about</NuxtLink>
    <a href="/juancs_cv.pdf" target="_blank">resume</a>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.current-route {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    margin-top: 2rem;
    gap: 0.5rem;
  }
}
</style>
