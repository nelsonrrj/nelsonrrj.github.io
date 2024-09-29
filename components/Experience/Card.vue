<script setup lang="ts">
import type { Experience } from '~/types/experience.types';
import { basicFormat } from '~/utlis';

defineProps<{ work: Experience }>()

</script>

<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2">
      <span class="text-xs font-semibold opacity-80">
        {{ basicFormat(work.sdate) }} - {{ work?.edate ? basicFormat(work.edate) : 'Actualmente' }}
      </span>
    </div>
    <div class="col-span-6">
      <h1 class="text-lg font-bold">{{ work.position }} · {{ work.company }}</h1>
      <p class="mb-3 text-sm opacity-80">{{ work.description }}</p>
      <ExperienceStack :stack="work.stack" />
    </div>
  </div>
</template>

<style scoped></style>
