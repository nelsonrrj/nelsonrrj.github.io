<script setup lang="ts">
defineProps<{ stack: string[] }>()
</script>

<template>
  <ol>
    <li
      v-for="(name, index) in stack"
      :key="index"
      class="mb-1 mr-1 inline-block cursor-default rounded-full bg-teal-400/10 px-2 py-1 text-xs font-medium text-teal-300 transition-colors duration-500 hover:bg-teal-400/20"
    >
      {{ name }}
    </li>
  </ol>
</template>

<style scoped></style>
