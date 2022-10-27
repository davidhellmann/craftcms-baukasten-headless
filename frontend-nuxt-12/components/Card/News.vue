<script lang="ts" setup>
const props = defineProps({
  root: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: ''
  },
  uri: {
    type: String,
    default: ''
  },
  image: {
    type: Object,
    default: () => {}
  },
  style: {
    type: String,
    default: 'default',
  },
})

const variants = ref({
  defaultStyles: 'flex flex-col',
  style: {
    default: 'shadow-md bg-gray-50 p-4 rounded-sm',
  },
})

const tw = ref({
  classes: {
    root: 'flex flex-col',
    rootCustom: props?.root
  },
  variants: {
    default: {

    }
  }
})

const componentClasses = useComponentClasses({props, variants});
</script>

<template>
  <article :class="[componentClasses]">
    <TextHeadline :text="title" />
    <Image :image="image" />
    <LinkDefault class="mt-auto self-start" :to="uri"
                 color="primary">
      Read more
    </LinkDefault>
  </article>
</template>
