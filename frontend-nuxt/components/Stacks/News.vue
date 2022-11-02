<script lang="ts" setup>
const slots = useSlots()

const props = defineProps({
  tw: {
    type: String,
    default: '',
  },
  cols: {
    type: String,
    default: '2',
  },
})

const variants = ref({
  defaultStyles: 'grid gap-8',
  cols: {
    '1': 'grid-cols-1',
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-3',
  },
})

const componentClasses = useComponentClasses({props, variants});
</script>

<template>
  <section v-if="slots.default" :class="[componentClasses]">
    <slot></slot>
  </section>
</template>
