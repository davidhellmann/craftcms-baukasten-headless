<script lang="ts" setup>
const route = useRoute();

const {
  data: {value: {entryNews}},
  refresh: refreshEntry
} = await useAsyncData('entryNews', () => GqlEntryNews({
  section: ["news"],
  slug: route.params.slug,
  queryEntryImage: true,
}));

</script>

<template>
  <div>
    <NuxtLink to="/news">News</NuxtLink>
    <!--    <h1>{{ entryNews.title }}</h1>-->
  </div>
</template>

<style scoped></style>
