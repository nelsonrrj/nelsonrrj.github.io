<script setup lang="ts">
import {
  LINK_GITHUB_PROFILE,
  LINK_LINKEDIN_PROFILE,
  WORK_EMAIL,
} from '~/data/social'
</script>

<template>
  <ul class="flex flex-row justify-center gap-4 p-8">
    <li>
      <NuxtLink
        :to="LINK_GITHUB_PROFILE"
        target="_blank"
        external
      >
        <IconsGithub
          class="size-8 transition-all duration-500 ease-in-out hover:text-teal-300"
        />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        :to="LINK_LINKEDIN_PROFILE"
        target="_blank"
        external
      >
        <IconsLinkedin
          class="size-8 transition-all duration-500 ease-in-out hover:text-teal-300"
        />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        :to="`mailto:${WORK_EMAIL}`"
        target="_blank"
        external
      >
        <IconsMail
          class="size-8 transition-all duration-500 ease-in-out hover:text-teal-300"
        />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
