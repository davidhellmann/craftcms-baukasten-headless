<template>
  <div>
    <NuxtLink to="/news">News</NuxtLink>
    <!-- Pages -->
    <template v-if="entriesPages">
      <h1 v-if="refreshEntriesPages" @click="refreshEntriesPages">Pages</h1>
      <table style="table-layout: fixed; width: 100%; text-align: left">
        <thead>
        <tr>
          <th>Title</th>
          <th>ID</th>
          <th>URI</th>
          <th>Slug</th>
          <th>Post Date</th>
          <th>Post Time</th>
          <th>Day as number</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="entry in entriesPages" :key="entry.id">
          <td>{{ entry.title }}</td>
          <td>{{ entry.id }}</td>
          <td>{{ entry.uri }}</td>
          <td>{{ entry.slug }}</td>
          <td>{{ entry.dateShort }}</td>
          <td>{{ entry.dateTime }}</td>
          <td>{{ entry.dateDayNumeric }}</td>
        </tr>
        </tbody>
      </table>
    </template>

    <!-- Error Pages -->
    <template v-if="entriesErrorPages">
      <h1>Error Pages</h1>
      <table style="table-layout: fixed; width: 100%; text-align: left">
        <thead>
        <tr>
          <th>Title</th>
          <th>ID</th>
          <th>URI</th>
          <th>Slug</th>
          <th>Post Date</th>
          <th>Post Time</th>
          <th>Day as number</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="entry in entriesErrorPages">
          <tr>
            <td>{{ entry.title }}</td>
            <td>{{ entry.id }}</td>
            <td>{{ entry.uri }}</td>
            <td>{{ entry.slug }}</td>
            <td>{{ entry.dateShort }}</td>
            <td>{{ entry.dateTime }}</td>
            <td>{{ entry.dateDayNumeric }}</td>
          </tr>
        </template>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: "default",
});

interface IGQLQueryResponse {
  data: any,
  refresh: any
}

// Fetch Pages Data
const {
  data: { value: { entriesPages }},
  refresh: refreshEntriesPages
}: IGQLQueryResponse = await useAsyncData('entriesPages', () => GqlEntriesPages({
  queryEntryImage: true,
}));

// Fetch Error Pages Data
const {
  data: {value: {entriesErrorPages}},
  refresh: refreshErrorPages
}: IGQLQueryResponse = await useAsyncData('entriesErrorPages', () => GqlEntriesErrorPages({
  section: ["errorPages"],
}));
</script>
