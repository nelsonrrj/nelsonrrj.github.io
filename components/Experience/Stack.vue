<script setup lang="ts">
defineProps<{ stack: string[] }>()
</script>

<template>
  <ol>
    <li
      v-for="(name, index) in stack"
      :key="index"
      class="text-accent-light bg-accent-light/5 hover:bg-accent-light/20 dark:text-accent-dark dark:bg-accent-dark/10 dark:hover:bg-accent-dark/20 mb-1 mr-1 inline-block rounded-full px-2 py-1 text-xs font-medium"
    >
      {{ name }}
    </li>
  </ol>
</template>

<style scoped></style>
