<script lang="ts" setup>
const isDark = ref(getCurrentTheme() === 'dark')

function getCurrentTheme(): string {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('theme') ?? 'dark'
  }

  if (window && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}

function updateTheme(): void {
  isDark.value = document.documentElement.classList.toggle('dark')

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
}
</script>

<template>
  <button @click="updateTheme">
    <template v-if="isDark">Dark</template>
    <template v-else>Light</template>
  </button>
</template>

<style></style>
