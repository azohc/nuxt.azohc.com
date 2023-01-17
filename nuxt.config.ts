export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  css: ["@/assets/css/base.css", "@/assets/css/main.css"],
});
