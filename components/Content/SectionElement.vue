<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section
    :id="id"
    class="pb-10 lg:pt-20"
  >
    <ContentSectionHeader
      class="block"
      :title="title"
    />
    <slot />
  </section>
</template>

<style scoped></style>
