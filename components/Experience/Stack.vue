<script setup lang="ts">

defineProps<{ stack: string[] }>()

</script>

<template>
  <ol>
    <li v-for="name in stack">{{ name }}</li>
  </ol>
</template>

<style scoped></style>
