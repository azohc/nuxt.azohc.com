<template>
  <article>
    <div class="dated-heading">
      <h3>{{ heading }}</h3>
      <span>{{ period }}</span>
    </div>
    <h4>{{ subheading }}</h4>
    <slot></slot>
  </article>
</template>

<script setup>
const { heading, period, subheading } = defineProps({
  heading: {
    required: true,
    type: String,
  },
  period: {
    required: true,
    type: String,
  },
  subheading: {
    required: true,
    type: String,
  },
});
</script>

<style scoped>
.dated-heading {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.dated-heading > * {
  margin: 0;
}
</style>
