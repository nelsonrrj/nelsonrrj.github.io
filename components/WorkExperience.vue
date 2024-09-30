<script setup lang="ts">
import { WORK_EXPERIENCE } from '~/types/experience.types'

const works = ref(WORK_EXPERIENCE)
</script>

<template>
  <section>
    <ul>
      <li v-for="work in works">
        <ExperienceCard
          class="mb-8"
          :work="work"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
