<template>
  <div>
    <NuxtLink to="/news">News</NuxtLink>
    <h1>Content Builder View</h1>
    <h1>Title: {{ entry.title }}</h1>
    <p>Entry Type Handle: {{ entry.typeHandle }}</p>
    <p>Entry Section Handle {{ entry.sectionHandle }}</p>
    <p>CurrentSiteHandle {{ currentSiteHandle }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  entry: object,
  currentSiteHandle: string
}

const props = defineProps<Props>()
</script>
