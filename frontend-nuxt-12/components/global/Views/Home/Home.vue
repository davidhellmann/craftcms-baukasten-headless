<template>
  <template v-if="entryData">
    <NuxtLink to="/">Back to home</NuxtLink>
    <h1>{{ entryData.title }}</h1>
  </template>
</template>

<script setup lang="ts">
interface Props {
  entry: {
    [key: string]: string
  },
  currentSiteHandle: string,
  currentSiteLanguage: string,
}

interface IGQLQueryResponse {
  data: any,
  refresh: any
}

const props = defineProps<Props>()
const entryData = ref(null)

if (props.entry?.id) {
  const {
    data: {value: {home}}
  }: IGQLQueryResponse = await useAsyncGql('home', {
    id: props.entry?.id,
    site: props.currentSiteHandle
  });

  entryData.value = home
}
</script>
