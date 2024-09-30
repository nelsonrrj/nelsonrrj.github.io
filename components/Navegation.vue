<script setup lang="ts"></script>

<!-- TODO: Add naviation active -->

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink
          to="#about"
          class="group flex items-center"
        >
          <span
            class="mr-2 inline-block w-3 border transition-all duration-200 group-hover:w-8"
          ></span>
          <span>About</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="#experience"
          class="group flex items-center"
        >
          <span
            class="mr-2 inline-block w-3 border transition-all duration-200 group-hover:w-8"
          ></span>
          <span>Experiences</span>
        </NuxtLink>
      </li>
      <li v-if="$config.public.enableProjects">
        <NuxtLink
          to="#projects"
          class="group flex items-center"
        >
          <span
            class="mr-2 inline-block w-3 border transition-all duration-200 group-hover:w-8"
          ></span>
          <span>Projects</span>
        </NuxtLink>
      </li>
      <li v-if="$config.public.enableProjects">
        <NuxtLink
          to="#blog"
          class="group flex items-center"
        >
          <span
            class="mr-2 inline-block w-3 border transition-all duration-200 group-hover:w-8"
          ></span>
          <span>Blog</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
