<script lang="ts" setup>
import type { NavBarItem } from '~/types/navBarItem'

defineProps<{ item: NavBarItem }>()
</script>

<template>
  <li>
    <NuxtLink
      :to="item.link"
      :aria-label="item.id"
      class="group flex items-center"
    >
      <span
        class="mr-2 inline-block w-3 border transition-all duration-200 group-hover:w-8 group-[.active]:w-8"
      ></span>
      <span>{{ item.title }}</span>
    </NuxtLink>
  </li>
</template>

<style scoped></style>
