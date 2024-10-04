<script lang="ts" setup>
import {
  FULL_NUMBER,
  LINK_GITHUB_PROFILE,
  LINK_LINKEDIN_PROFILE,
  WORK_EMAIL,
} from '~/data/social'
</script>

<template>
  <section>
    <ul>
      <li>
        <ContactItem
          title="Telefono"
          :label="`+${FULL_NUMBER}`"
        />
      </li>
      <li>
        <ContactItem
          title="Correo electrónico"
          :label="WORK_EMAIL"
        />
      </li>
      <li>
        <ContactItem
          title="LinkedIn"
          :label="LINK_LINKEDIN_PROFILE"
        />
      </li>
      <li>
        <ContactItem
          title="Github"
          :label="LINK_GITHUB_PROFILE"
        />
      </li>
    </ul>
  </section>
</template>

<style></style>
