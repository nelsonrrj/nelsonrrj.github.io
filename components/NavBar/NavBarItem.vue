<script lang="ts" setup>
import type { NavBarItem } from '~/types/navBarItem'

defineProps<{ item: NavBarItem }>()
</script>

<template>
  <NuxtLink
    :to="item.link"
    :aria-label="item.id"
    class="group flex items-center"
  >
    <span
      class="mr-2 w-3 border border-white border-opacity-50 transition-all group-hover:w-8 group-hover:border-opacity-100 group-[.active]:w-8 group-[.active]:border-opacity-100 motion-reduce:transition-none"
    ></span>
    <span
      class="opacity-50 group-hover:opacity-100 group-[.active]:opacity-100 motion-reduce:transition-none"
      >{{ item.title }}</span
    >
  </NuxtLink>
</template>

<style scoped></style>
