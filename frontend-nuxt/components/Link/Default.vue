<template>
  <template v-if="to">
    <NuxtLink
      v-bind="attributes"
      v-if="slots.default"
      :class="[componentClasses]">
      <slot/>
    </NuxtLink>
  </template>

  <template v-else>
    <button
      v-bind="attributes"
      v-if="slots.default"
      :class="[componentClasses]">
      <slot/>
    </button>
  </template>
</template>

<script lang="ts" setup>
import {useComponentClasses} from "~/composables/useComponentClasses";

const slots = useSlots()

const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  tw: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  style: {
    type: String,
    default: 'button',
  },
})

const attributes = computed(() => {
  if (props?.to) {
    return {to: props.to.startsWith('http') ? props.to : `/${props.to}`}
  } else {
    return {type: 'button'}
  }
})

const variants = ref({
  defaultStyles: 'inline-flex font-bold',
  style: {
    button: 'rounded',
    pill: 'rounded-full',
    inline: '',
  },
  color: {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    gray: 'bg-gray text-white'
  },
  size: {
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  }
})

// const componentClasses = computed(() : string[] => {
//   return [
//     variants.value.defaultStyles,
//     variants.value.style[props.style],
//     variants.value.color[props.color],
//     variants.value.size[props.size],
//     props.tw,
//   ]
// })

const componentClasses = computed(() => {
  return useComponentClasses({props, variants})
})

</script>
