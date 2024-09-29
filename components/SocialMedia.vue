<script setup lang="ts">
import {
  LINK_GITHUB_PROFILE,
  WORK_EMAIL,
  LINK_LINKEDIN_PROFILE
} from '~/data/social'
</script>

<template>
  <ul class="flex flex-row gap-4 p-8 justify-center">
    <li>
      <NuxtLink :to="LINK_GITHUB_PROFILE" target="_blank" external>
        <IconsGithub class="size-8 hover:text-teal-300 rounded-full transition-all duration-500 ease-in-out" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="LINK_LINKEDIN_PROFILE" target="_blank" external>
        <IconsLinkedin class="size-8 hover:text-teal-300 transition-all duration-500 ease-in-out" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="`mailto:${WORK_EMAIL}`" target="_blank" external>
        <IconsMail class="size-8 hover:text-teal-300 transition-all duration-500 ease-in-out" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
