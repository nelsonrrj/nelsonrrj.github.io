<script setup lang="ts">
useHead({
  title: 'Nelson Rodríguez - Desarrollador y Programador web',
  meta: [
    {
      name: 'description',
      content: 'Portafolio de Nelson Rodriguez desarrollador y programador web',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
  ],
  bodyAttrs: {
    class: 'bg-slate-800 text-slate-50 cursor-default',
  },
  htmlAttrs: {
    class: 'scroll-smooth',
    lang: 'es',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
root {
  color-scheme: light;
}

body {
  font: ui-sans-serif system-ui;
}
</style>
