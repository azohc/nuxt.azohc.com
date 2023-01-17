<template>
  <div class="app-container">
    <header>
      <nav>
        <NuxtLink active-class="current-route" to="/">home</NuxtLink>
        <NuxtLink active-class="current-route" to="/about">about</NuxtLink>
        <NuxtLink active-class="current-route" to="/projects"
          >projects</NuxtLink
        >
      </nav>
    </header>
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

nav {
  display: flex;
  justify-content: flex-end;
}

nav > * {
  padding-left: 1em;
}

.current-route {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .app-container {
    display: grid;
    grid-template-columns: 100px 650px;
    gap: 3rem;
  }

  nav {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 2rem;
  }
}
</style>
