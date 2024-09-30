<script setup lang="ts">
import type { Experience } from '~/types/experience.types'
import { basicFormat } from '~/utlis'

defineProps<{ work: Experience }>()
</script>

<template>
  <article
    class="group grid grid-cols-8 rounded-md px-2 transition-colors hover:bg-slate-500/10"
  >
    <header class="col-span-2">
      <span class="text-xs font-semibold opacity-80">
        {{ basicFormat(work.sdate) }} -
        {{ work?.edate ? basicFormat(work.edate) : 'Actualmente' }}
      </span>
    </header>
    <div class="col-span-6">
      <h1 class="text-lg font-bold group-hover:text-teal-300">
        {{ work.position }} · {{ work.company }}
      </h1>
      <p class="mb-3 text-pretty text-sm opacity-80">{{ work.description }}</p>
      <ExperienceStack :stack="work.stack" />
    </div>
  </article>
</template>

<style scoped></style>
