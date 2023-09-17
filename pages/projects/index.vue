<template>
  <main id="projects">
    <h1>projects</h1>
    <hr />
    <div class="grid">
      <template v-for="p in projects">
        <a :href="p.link" class="project-anchor">
          {{ p.name }}
        </a>
        <span v-if="p.text">
          {{ p.text }}
        </span>
        <component v-else-if="p.node" :is="p.node" />
      </template>
    </div>
  </main>
</template>

<script setup lang="tsx">
type Project = {
  name: string;
  text?: string;
  link: string;
  // @ts-ignore
  node?: () => VNode;
};
const projects: Project[] = [
  {
    name: "three-js-ball",
    text: "interactive webgl + three.js scene (wip)",
    link: "https://three-js-ball-wheat.vercel.app",
  },
  {
    name: "sneyk-v2",
    link: "https://sneky-nuxt.vercel.app",
    text: "second approach at recreating snake, featuring a more serious design (wip)",
  },
  {
    name: "blog",
    link: "https://remix-blog-peach.vercel.app",
    text: "read about the lessons i've learnt as a developer",
  },
  {
    name: "homepage-v3",
    link: "https://homepage-ts.vercel.app/",
    text: "running out of reasons to justify remaking the same homepage, this one is currently a wip",
  },
  {
    name: "spotify-replay",
    link: "https://abonet.me/re-play",
    node: () =>
      h("span", null, [
        "a joint venture in recreating Spotify's design system, in collaboration with ",
        h("a", { href: "https://abonet.me" }, "Tony"),
        " and ",
        h("a", { href: "https://www.rosejhh.dev" }, "Rose"),
      ]),
  },
  {
    name: "homepage-v2",
    link: "https://homepage-react.vercel.app/",
    text: "same dashboard concept, but with more efforts in styles and interactions",
  },
  {
    name: "homepage-v1",
    link: "https://azohc.github.io/mwt",
    text: "a widget based dashboard to use as a home or new tab page",
  },
  {
    name: "sneyk-v1",
    link: "https://nuxt-js-boilerplate.vercel.app",
    text: "play or compete - but mainly stay alive",
  },
  {
    name: "wat-do",
    link: "https://azohc.github.io/wat-do/",
    text: "in case you're bored & dont know what to do",
  },
];
</script>

<style scoped>
div.grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
}

.project-anchor {
  justify-self: end;
}
</style>
