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
      classes="size-6 transition-all duration-500 ease-in-out hover:text-teal-300 motion-reduce:transition-none lg:size-8"
    />
  </NuxtLink>
</template>

<style></style>
