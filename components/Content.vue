<script setup lang="ts"></script>

<template>
  <main class="overflow-y-auto">
    <About id="about" class="mt-20 mb-20" />

    <WorkExperience id="work-experience" class="mb-20" />

    <Projects v-if="$config.public.enableProjects" id="projects" class="mb-20" />

    <Blog v-if="$config.public.enableBlog" id="blog" class="mb-20" />
  </main>
</template>

<style scoped></style>
