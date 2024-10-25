<script setup lang="ts">
defineProps<{ stack: string[] }>()
</script>

<template>
  <ol>
    <li
      v-for="(name, index) in stack"
      :key="index"
      class="mb-1 mr-1 inline-block rounded-full bg-accent-light/5 px-2 py-1 text-xs font-medium text-accent-light hover:bg-accent-light/20 dark:bg-accent-dark/10 dark:text-accent-dark dark:hover:bg-accent-dark/20"
    >
      {{ name }}
    </li>
  </ol>
</template>

<style scoped></style>
