<script setup lang="ts">
import { WORK_EXPERIENCE } from '~/types/experience.types'

const works = ref(WORK_EXPERIENCE)
</script>

<template>
  <ul>
    <li
      v-for="(work, index) in works"
      :key="index"
    >
      <ExperienceCard
        class="mb-8"
        :work="work"
      />
    </li>
  </ul>
</template>

<style scoped></style>
