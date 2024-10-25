<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<template>
  <div
    class="sticky top-0 z-40 h-10 content-center bg-background-light dark:bg-background-dark"
  >
    <h1 class="text-xl font-bold">{{ title }}</h1>
  </div>
</template>

<style></style>
