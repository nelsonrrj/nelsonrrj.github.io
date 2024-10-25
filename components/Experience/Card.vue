<script setup lang="ts">
import type { Experience } from '~/types/experience'
import { basicFormat } from '~/utlis'

defineProps<{ work: Experience }>()
</script>

<template>
  <article
    class="group gap-3 rounded-md hover:bg-background-dark/5 lg:px-2 xl:flex xl:flex-row dark:hover:bg-background/10"
  >
    <header class="shrink-0">
      <span class="text-xs font-semibold opacity-60">
        {{ basicFormat(work.sdate) }} -
        {{ work?.edate ? basicFormat(work.edate) : 'Actualmente' }}
      </span>
    </header>
    <div>
      <h1
        class="text-lg font-bold group-hover:text-accent-light dark:group-hover:text-accent-dark"
      >
        {{ work.position }} · {{ work.company }} · {{ work.location }}
      </h1>
      <div class="mb-3">
        <p class="text-pretty text-sm">{{ work.description }}</p>
        <ul
          v-if="work.bulletPoints?.length"
          class="mb-3"
        >
          <template
            v-for="(bullet, index) in work.bulletPoints"
            :key="index"
          >
            <li class="ml-6 list-item list-disc text-pretty text-sm">
              {{ bullet }}
            </li>
          </template>
        </ul>
      </div>
      <ExperienceStack :stack="work.stack" />
    </div>
  </article>
</template>

<style scoped></style>
