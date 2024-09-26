<script setup lang="ts">

import { WORK_EXPERIENCE } from '~/types/experience.types'

const works = ref(WORK_EXPERIENCE);

</script>

<template>
  <section>
    <h1>Work experience</h1>
    <ul class="grid gap-5">
      <li v-for="work in works">
        <ExperienceCard :work="work" />
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
