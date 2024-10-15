<script setup lang="ts">
import experience from '~/data/workExperience'

const works = ref(experience)
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
    <li class="print:hidden">
      <ExperienceCVLink />
    </li>
  </ul>
</template>

<style scoped></style>
