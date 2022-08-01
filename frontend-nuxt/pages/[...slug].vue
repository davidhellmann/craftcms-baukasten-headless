<template>
  <div>
    <template v-if="entry">
      <NuxtLink to="/news">News</NuxtLink>
      <h1>{{ entry.title }}</h1>
    </template>
  </div>
</template>

<script lang="ts" setup>
import homepageQueryFile from '~/graphql/entry.homepage.graphql'
import { useGraphqlQuery } from "~/composables/useGraphqlQuery";
import {print} from "graphql/language/printer";
const route = useRoute()
const {API_URL, API_TOKEN} = useRuntimeConfig()

const entry = ref()
const {data: response } = await useGraphqlQuery({
  apiUrl: API_URL,
  apiToken: API_TOKEN,
  routeQuery: route.query,
  responseParameter: 'entry',
  query: print(homepageQueryFile),
  variables: {
    uri: route.path.slice(1)
  }
})

entry.value = response.value
</script>


<style scoped></style>
