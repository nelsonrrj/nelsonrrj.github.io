<script setup lang="ts"></script>

<template>
  <header class="z-50 flex flex-col bg-slate-800 lg:sticky lg:top-20 lg:h-96">
    <Presentation class="mb-5" />

    <Navigation class="mb-5 hidden lg:block" />

    <div class="hidden flex-grow lg:block"></div>

    <SocialMedia class="flex-shrink print:hidden" />
  </header>
</template>

<style scoped></style>
