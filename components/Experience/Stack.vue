<script setup lang="ts">
const { stack } = defineProps<{
  stack: string[];
}>()
</script>

<template>
  <ul>
    <li v-for="name in stack">{{ name }}</li>
  </ul>
</template>

<style scoped></style>
