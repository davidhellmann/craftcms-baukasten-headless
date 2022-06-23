<script lang="ts" setup>

const props = defineProps({
  url: {
    type: String,
    default: '',
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
})

const noScriptImageTag = computed(() => {
  return `<img src="${props?.url}" alt="${props?.alt}" />`
})
</script>

<template>
  <noscript v-html="noScriptImageTag" />
</template>
