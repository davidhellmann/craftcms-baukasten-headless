<script lang="ts" setup>
definePageMeta({
  layout: "default",
});


import newsQueryFile from '~/graphql/entries.news.graphql'
import { useGraphqlQuery } from "~/composables/useGraphqlQuery";
import {print} from "graphql/language/printer";
const route = useRoute()
const {API_URL, API_TOKEN} = useRuntimeConfig()

const entriesNews = ref()
const {data: response } = await useGraphqlQuery({
  apiUrl: API_URL,
  apiToken: API_TOKEN,
  routeQuery: route.query,
  responseParameter: 'entriesNews',
  query: print(newsQueryFile),
  variables: {
    section: 'news'
  }
})

entriesNews.value = response.value

// const {
//   data: {value: {entriesNews}},
//   refresh: refreshNews
// } = await useAsyncData('entriesNews', () => GqlEntriesNews({
//   section: ["news"],
//   queryEntryImage: true,
// }));
</script>

<template>
  <div>
    <NuxtLink to="/">Back to home</NuxtLink>
    <StacksNews v-if="entriesNews">
      <template v-for="(entry, i) in entriesNews" :key="i">
        <CardNews :title="entry.title"
                  :uri="entry.uri"
                  :image="entry.entryImage[0]"/>
      </template>
    </StacksNews>
  </div>
</template>
