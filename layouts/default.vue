<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-slate-800 text-slate-50 cursor-default"
  },
  htmlAttrs: {
    class: "scroll-smooth"
  }
})
</script>

<template>
  <div class="container w-screen h-screen m-auto">
    <slot />
  </div>
</template>

<style scoped></style>
