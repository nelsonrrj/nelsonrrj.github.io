<script setup lang="ts">

defineProps<{ stack: string[] }>()

</script>

<template>
  <ol>
    <li
      class="inline-block px-2 py-1 mr-1 mb-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 transition-colors duration-500 cursor-default"
      v-for="name in stack">
      {{ name }}
    </li>
  </ol>
</template>

<style scoped></style>
