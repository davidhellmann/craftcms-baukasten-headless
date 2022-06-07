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
    <NuxtLink to="/">Home</NuxtLink>
    <template v-if="entriesNews">
      <section class="grid grid-cols-2 gap-12">
        <template v-for="(entry, i) in entriesNews">
          <div class="border bg-gray-100 text-sm">
            <h2>{{ entry.title }}</h2>
            <LinkDefault :to="entry.uri" color="primary">{{ entry.title }}</LinkDefault>
          </div>
        </template>
      </section>
    </template>
  </div>
</template>
