<template>
  <div>
    <NuxtLink to="/news">News</NuxtLink>
    <h1>Content Builder View News</h1>
    <h1>Title: {{ entry.title }}</h1>
    <p>Entry Type Handle: {{ entry.typeHandle }}</p>
    <p>Entry Section Handle {{ entry.sectionHandle }}</p>
    <p>CurrentSiteHandle {{ currentSiteHandle }}</p>
    <p>CurrentSiteLanguage {{ currentSiteLanguage }}</p>
  </div>
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

if (props.entry?.id) {
  const {
    data: {value: {newsContentBuilder}}
  }: IGQLQueryResponse = await useAsyncGql('newsContentBuilder', {
    id: props.entry?.id,
    site: props.currentSiteHandle
  });
}
</script>
