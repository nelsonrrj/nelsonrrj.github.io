<script setup lang="ts">
import navBarItems from '~/data/navBarItems'
</script>

<template>
  <main>
    <ContentSectionElement
      :id="navBarItems.ABOUT.id"
      :title="navBarItems.ABOUT.title"
    >
      <About />
    </ContentSectionElement>

    <ContentSectionElement
      :id="navBarItems.EXPERIENCE.id"
      :title="navBarItems.EXPERIENCE.title"
    >
      <WorkExperience />
    </ContentSectionElement>
  </main>
</template>

<style scoped></style>
