<script setup lang="ts"></script>

<!-- TODO: Add naviation active -->

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="#about" class="flex items-center group">
          <span class="inline-block border w-3 mr-2 group-hover:w-8 transition-all duration-200"></span>
          <span>About</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#experience" class="flex items-center group">
          <span class="inline-block border w-3 mr-2 group-hover:w-8 transition-all duration-200"></span>
          <span>Experiences</span>
        </NuxtLink>
      </li>
      <li v-if="$config.public.enableProjects">
        <NuxtLink to="#projects" class="flex items-center group">
          <span class="inline-block border w-3 mr-2 group-hover:w-8 transition-all duration-200"></span>
          <span>Projects</span>
        </NuxtLink>
      </li>
      <li v-if="$config.public.enableProjects">
        <NuxtLink to="#blog" class="flex items-center group">
          <span class="inline-block border w-3 mr-2 group-hover:w-8 transition-all duration-200"></span>
          <span>Blog</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
