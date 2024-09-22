<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <Header class="mt-20" />
    <main class="bg-blue-500 h-screen overflow-y-auto">
      <About id="about" />
      <WorkExperience id="work-experience" />
      <Projects id="projects" />
      <Blog id="blog" />
    </main>
  </div>
</template>

<style scoped></style>
