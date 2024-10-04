<script setup lang="ts">
import {
  LINK_GITHUB_PROFILE,
  LINK_LINKEDIN_PROFILE,
  LINK_WHATSAPP,
  WORK_EMAIL,
} from '~/data/social'
</script>

<template>
  <ul class="flex flex-row justify-center gap-4">
    <li>
      <SocialMediaIcon
        :to="LINK_LINKEDIN_PROFILE"
        label="linkedin"
      >
        <template #icon="{ classes }">
          <IconsLinkedin :class="classes" />
        </template>
      </SocialMediaIcon>
    </li>
    <li>
      <SocialMediaIcon
        :to="LINK_GITHUB_PROFILE"
        label="github"
      >
        <template #icon="{ classes }">
          <IconsGithub :class="classes" />
        </template>
      </SocialMediaIcon>
    </li>
    <li>
      <SocialMediaIcon
        :to="`mailto:${WORK_EMAIL}`"
        label="email"
      >
        <template #icon="{ classes }">
          <IconsMail :class="classes" />
        </template>
      </SocialMediaIcon>
    </li>
    <li>
      <SocialMediaIcon
        :to="LINK_WHATSAPP"
        label="whatsapp"
      >
        <template #icon="{ classes }">
          <IconsWhatsapp :class="classes" />
        </template>
      </SocialMediaIcon>
    </li>
  </ul>
</template>

<style scoped></style>
