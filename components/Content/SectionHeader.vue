<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<template>
  <div
    class="sticky top-0 z-40 h-10 content-center bg-slate-800/90 backdrop-blur-3xl"
  >
    <h1 class="text-xl font-semibold">{{ title }}</h1>
  </div>
</template>

<style></style>
