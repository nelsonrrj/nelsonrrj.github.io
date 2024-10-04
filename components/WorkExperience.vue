<script setup lang="ts">
import experience from '~/data/workExperience'
import { LINK_CURRICULUM } from '~/data/social'

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
    <li class="text-right print:hidden">
      <NuxtLink
        :to="LINK_CURRICULUM"
        class="group rounded-md px-2 text-right hover:bg-slate-500/10"
        external
        target="_blank"
      >
        <IconsLink
          class="inline-block size-5 transition-transform group-hover:rotate-90 group-hover:text-teal-300 motion-reduce:transition-none"
        />
        <span class="text-lg font-bold group-hover:text-teal-300">
          Ver Perfil Completo
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
