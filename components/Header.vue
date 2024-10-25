<script setup lang="ts"></script>

<template>
  <header class="z-50 flex flex-col lg:sticky lg:top-20 lg:h-96">
    <HeaderPresentation class="mb-5" />

    <HeaderNavigation class="mb-5 hidden lg:block" />

    <div class="hidden flex-grow lg:block"></div>

    <HeaderSocialMedia class="flex-shrink print:hidden" />
  </header>
</template>

<style scoped></style>
