<script setup lang="ts">
import navBarItems from '~/data/navBarItems'
</script>

<template>
  <main>
    <section
      :id="navBarItems.ABOUT.id"
      class="pt-20"
    >
      <About />
    </section>

    <section
      :id="navBarItems.EXPERIENCE.id"
      class="pt-20"
    >
      <WorkExperience />
    </section>

    <section
      v-if="$config.public.enableProjects"
      :id="navBarItems.PROJECTS.id"
      class="pt-20"
    >
      <Projects />
    </section>

    <section
      v-if="$config.public.enableBlog"
      :id="navBarItems.BLOG.id"
      class="pt-20"
    >
      <Blog />
    </section>
  </main>
</template>

<style scoped></style>
