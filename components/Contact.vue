<script lang="ts" setup>
import {
  DATA_CONTACT_EMAIL,
  DATA_FULL_NUMBER,
  LINK_GITHUB_PROFILE,
  LINK_LINKEDIN_PROFILE,
} from '~/data/social'
</script>

<template>
  <section>
    <ul>
      <li>
        <ContactItem
          title="Telefono"
          :label="`+${DATA_FULL_NUMBER}`"
        />
      </li>
      <li>
        <ContactItem
          title="Correo electrónico"
          :label="DATA_CONTACT_EMAIL"
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
