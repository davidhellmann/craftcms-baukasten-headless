<script lang="ts" setup>

const props = defineProps({
  image: {
    type: Object,
    default: () => {
    }
  },
  plainImage: {
    type: Boolean,
    default: true
  },
  aspectRatio: {
    type: String,
    default: 'aspect-landscape'
  },
  objectFit: {
    type: String,
    default: 'cover'
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  showDominantColor: {
    type: Boolean,
    default: true
  },
  sources: {
    type: Array,
    default: () => []
  },
  caption: {
    type: Boolean,
    default: false
  },
  decorativeImage: {
    type: Boolean,
    default: false
  },
  noScript: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <template v-if="image">

    <template v-if="plainImage">
      <ImagePlain :image-data="props" />
    </template>

  </template>
</template>
