<script lang="ts" setup>
import { LINK_CURRICULUM } from '~/data/social'
</script>

<template>
  <NuxtLink
    :to="LINK_CURRICULUM"
    class="group inline-flex rounded p-2 font-semibold hover:bg-slate-500/10 hover:text-teal-300"
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
