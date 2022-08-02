<template>
  <div>
    <template v-if="entry">
      <NuxtLink to="/news">News</NuxtLink>
      <h1>{{ entry.title }}</h1>
    </template>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

interface IGQLQueryResponse {
  data: any,
  refresh: any
}


// Fetch Pages Data
const {
  data: {value: { entry }}
}: IGQLQueryResponse = await useAsyncData('xxx', () => GqlBuilder({
  uri: route.path.slice(1)
}));

console.log(entry)
</script>


<style scoped></style>
