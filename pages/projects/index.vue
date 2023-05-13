<template>
  <main id="projects">
    <h1>projects</h1>
    <hr />
    <div class="grid">
      <a target="_blank" href="https://remix-blog-peach.vercel.app">blog</a>
      <span>read about the lessons i've learnt as a developer</span>
      <a target="_blank" href="https://nuxt-js-boilerplate.vercel.app">snake</a>
      <span>play, compete, stay alive</span>
      <a target="_blank" href="https://azohc.github.io/wat-do/">wat-do</a>
      <span>in case you're bored & dont know what to do</span>
    </div>
  </main>
</template>

<style scoped>
div.grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  row-gap: 1rem;
}
</style>
