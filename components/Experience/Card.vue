<script setup lang="ts">
import type { Experience } from '~/types/experience.types';
import { basicFormat } from '~/utlis';

defineProps<{ work: Experience }>()

</script>

<template>
  <div>
    <div>{{ basicFormat(work.sdate) }} - {{ work?.edate ? basicFormat(work.edate) : 'Actualmente' }}</div>
    <div>
      <h1>{{ work.position }} - {{ work.company }}</h1>
      <p>{{ work.description }}</p>
    </div>
    <ExperienceStack :stack="work.stack" />
  </div>
</template>

<style scoped></style>
