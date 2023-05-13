<template>
  <main id="projects">
    <h1>projects</h1>
    <hr />
    <div class="grid">
      <a target="_blank" href="https://remix-blog-peach.vercel.app">blog</a>
      <span>read about the lessons i've learnt as a developer</span>

      <a target="_blank" href="https://homepage-react.vercel.app/"
        >homepage-v2</a
      >
      <span
        >same dashboard concept, but with a more pronounced lean towards
        styling</span
      >

      <a target="_blank" href="https://abonet.me/re-play">spotify-replay</a>
      <span
        >a joint venture in recreating Spotify's design system, in collaboration
        with <a href="https://abonet.me">Tony</a> and
        <a href="https://www.rosejhh.dev">Rose</a></span
      >

      <a target="_blank" href="https://azohc.github.io/mwt">homepage-v1</a>
      <span>a widget based dashboard to use as a home or new tab page</span>

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
