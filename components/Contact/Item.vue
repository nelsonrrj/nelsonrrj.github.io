<script lang="ts" setup>
defineProps<{ label: string; title: string }>()
</script>

<template>
  <div>
    <span>{{ title }}: </span>
    <NuxtLink>
      <span class="text-teal-300">{{ label }}</span>
    </NuxtLink>
  </div>
</template>

<style></style>
