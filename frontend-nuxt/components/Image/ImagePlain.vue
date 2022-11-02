<script lang="ts" setup>

import {onMounted} from "#imports";
import {useIntersectionObserver} from "~/composables/useIntersectionObserver";

const props = defineProps({
  root: {
    type: String,
    default: '',
  },
  imageData: {
    type: Object,
    default: () => {
    }
  },
})

const tw = ref({
  root: '',
  rootCustom: props?.root,
  variants: {}
})

const image = ref(null);
useIntersectionObserver(image)

</script>

<template>
  <template v-if="imageData?.image">
    <img ref="image"
         :src="imageData?.loading === 'auto' ? imageData?.image?.url : imageData?.image?.base64"
         :srcset="imageData?.loading === 'auto' ? imageData?.image?.srcset : null"
         :data-srcset="imageData?.loading !== 'auto' ? imageData?.image?.srcset : null"
         :data-src="imageData?.loading !== 'auto' ? imageData?.image?.url : null"
         :data-type="imageData?.image?.extension"
         :class="[imageData?.loading !== 'auto' ? 'lazyload' : '', tw?.root, imageData?.aspectRatio, tw?.rootCustom]"
         :width="imageData?.image?.width"
         :height="imageData?.image?.height"
         :alt="imageData?.image?.alt || imageData?.image?.title"
         :title="imageData?.image?.title"
         sizes="100vw"
         decoding="async"
         :data-sizes="imageData?.loading !== 'auto' ? 'auto' : null"
         :loading="imageData?.loading"
         :style="`object-fit: ${imageData?.objectFit};
                  object-position: ${imageData?.image?.focalPoint.map(x => `${x * 100}%`).join(' ')};
                  height: auto; width: 100%;`"
    />

    <ImageNoScript v-if="imageData?.noScript"
                   :url="imageData?.image?.url"
                   :alt="imageData?.image?.alt || imageData?.image?.title"/>
  </template>
</template>
