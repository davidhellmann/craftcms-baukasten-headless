<script lang="ts" setup>

const props = defineProps({
  root: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: 'h2'
  },
  text: {
    type: String,
    default: '',
    required: true
  },
  size: {
    type: String,
    default: 'h2',
  },
})

const tw = {
  root: 'font-bold',
  rootCustom: props?.root,
  variants: {
    size: {
      mega: 'text-9xl',
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base',
    }
  }
}
</script>

<template>
  <Component :is="tag"
             :class="[
               tw.root,
               tw.rootCustom,
               tw.variants.size[size]
             ]" v-text="text">
  </Component>
</template>
