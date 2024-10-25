<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink
    :to="to"
    external
    target="__blanck"
    :aria-label="label"
  >
    <slot
      name="icon"
      classes="size-6 transition-all duration-400 ease-in-out hover:text-accent-light dark:hover:text-accent-dark motion-reduce:transition-none lg:size-8"
    />
  </NuxtLink>
</template>

<style></style>
