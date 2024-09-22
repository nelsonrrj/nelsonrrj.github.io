<script setup lang="ts"></script>

<!-- TODO: It needs hover class -->

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="#about" class="flex items-center">
          <span class="inline-block border w-3 mr-2"></span>
          <span>About</span>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="#experience" class="flex items-center">
          <span class="inline-block border w-3 mr-2"></span>
          <span>Experiences</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#projects" class="flex items-center">
          <span class="inline-block border w-3 mr-2"></span>
          <span>Projects</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#blog" class="flex items-center">
          <span class="inline-block border w-3 mr-2"></span>
          <span>Blog</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
