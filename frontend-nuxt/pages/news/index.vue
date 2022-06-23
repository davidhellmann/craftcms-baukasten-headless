<script lang="ts" setup>
definePageMeta({
  layout: "default",
});


const {
  data: {value: {entriesNews}},
  refresh: refreshNews
} = await useAsyncData('entriesNews', () => GqlEntriesNews({
  section: ["news"],
  queryEntryImage: true,
}));

</script>

<template>
  <div>
    <NuxtLink to="/">Back to home</NuxtLink>
    <StacksNews v-if="entriesNews">
      <template v-for="(entry, i) in entriesNews" :key="i">
        <CardNews :title="entry?.title"
                  :uri="entry?.uri"
                  :image="entry?.entryImage[0]"/>
      </template>
    </StacksNews>
  </div>
</template>
