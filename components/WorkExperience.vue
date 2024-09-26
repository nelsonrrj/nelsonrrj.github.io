<script setup lang="ts">

import { WORK_EXPERIENCE } from '~/data/workExperience'

const works = ref(WORK_EXPERIENCE);

</script>

<template>
  <section>
    <h1>Work experience</h1>
    <div>
      <template v-for="work in works">
        <ExperienceCard :work="work" />
      </template>
    </div>
  </section>
</template>

<style scoped></style>
