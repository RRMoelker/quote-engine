<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="wrapper">
    <h1 class="green">{{ msg }}</h1>
    <h3>Fetching random quotes since 2024</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.wrapper h1,
.wrapper h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .wrapper h1,
  .wrapper h3 {
    text-align: left;
  }
}
</style>
