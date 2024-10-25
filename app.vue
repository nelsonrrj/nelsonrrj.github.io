<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'scroll-smooth',
    lang: 'es',
  },
  bodyAttrs: {
    class:
      'cursor-default bg-background-light text-base-dark dark:text-base-light dark:bg-background-dark',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style></style>
