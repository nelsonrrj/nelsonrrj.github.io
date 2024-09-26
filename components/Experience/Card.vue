<script setup lang="ts">
import type { Experience } from '~/types/experience.type';
import { basicFormat } from '~/utlis/date';


const { work } = defineProps<{
  work: Experience
}>()

</script>

<template>
  <div>
    <div>{{ basicFormat(work.sdate) }} - {{ work?.edate ? basicFormat(work.edate) : 'Present' }}</div>
    <div>
      <h1>{{ work.position }} - {{ work.company }}</h1>
      <p>{{ work.description }}</p>
    </div>
    <ExperienceStack :stack="work.stack" />
  </div>
</template>

<style scoped></style>
