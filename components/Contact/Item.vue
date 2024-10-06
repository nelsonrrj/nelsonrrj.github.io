<script lang="ts" setup>
defineProps<{ label: string; title: string }>()
</script>

<template>
  <div>
    <span class="mr-1">{{ title }}:</span>
    <span class="text-teal-300">{{ label }}</span>
  </div>
</template>

<style></style>
