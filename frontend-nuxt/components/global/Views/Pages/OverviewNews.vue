<template>
  <template v-if="entryData">
    <NuxtLink to="/">Back to home</NuxtLink>
    <h1>{{ entryData.title }}</h1>

    <ul v-if="newsData" class="mt-8">
      <li v-for="item in newsData" :key="item.id">

        <NuxtLink to="/">Back to home</NuxtLink>
        {{ item.title }}
      </li>
    </ul>
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
const newsData = ref(null)


if (props.entry?.id) {
  const {
    data: {value: {pagesOverviewNews}}
  }: IGQLQueryResponse = await useAsyncGql('pagesOverviewNews', {
    id: props.entry?.id,
    site: props.currentSiteHandle
  });

  entryData.value = pagesOverviewNews

  // Query All Entries
  const {
    data: {value: {collectionNews}}
  }: IGQLQueryResponse = await useAsyncGql('collectionNews', {
    section: ['news'],
    site: props.currentSiteHandle
  });

  newsData.value = collectionNews

  // console.log(newsData.value)

}
</script>
