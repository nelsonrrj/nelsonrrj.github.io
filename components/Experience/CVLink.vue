<script lang="ts" setup>
import { LINK_CURRICULUM } from '~/data/social'
</script>

<template>
  <NuxtLink
    :to="LINK_CURRICULUM"
    class="group inline-flex rounded p-2 font-semibold hover:bg-background-dark/5 hover:text-accent-light dark:hover:bg-background/10 dark:hover:text-accent-dark"
    external
    target="_blank"
  >
    <IconsLink class="mr-1" />
    <span>Ver CV completo</span>
    <IconsArrowUpRight
      class="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none"
    />
  </NuxtLink>
</template>

<style></style>
