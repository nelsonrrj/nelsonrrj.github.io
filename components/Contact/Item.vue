<script lang="ts" setup>
defineProps<{ label: string; title: string }>()
</script>

<template>
  <div>
    <span>{{ title }}: </span>
    <span class="font-medium text-accent-light dark:text-accent-dark">
      {{ label }}
    </span>
  </div>
</template>

<style></style>
