<script setup lang="ts"></script>

<template>
  <main class="overflow-y-auto">
    <About id="about" class="mb-40 mt-20" />
    <WorkExperience id="work-experience" class="mb-40" />
    <template v-if="$config.public.enableProjects">
      <Projects id="projects" class="mb-40" />
    </template>
    <template v-if="$config.public.enableBlog">
      <Blog id="blog" class="mb-40" />
    </template>
  </main>
</template>

<style scoped></style>
