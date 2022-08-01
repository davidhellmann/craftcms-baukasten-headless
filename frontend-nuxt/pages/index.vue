<template>
  <div>
    <NuxtLink to="/news">News</NuxtLink>
    <!-- Pages -->
    <template v-if="entriesPages">
      <h1 @click="refreshPages">Pages</h1>
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
        <template v-for="entry in entriesPages">
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

// import ping from '~/graphql/ping.gql'
// import { print } from 'graphql/language/printer'

// const query = print(entriesPages)

// console.log(entriesPages)

// import ping = '~/graphql/ping.gql'
//
// console.log(ping)

// import { homepage } from '~/graphql/entry.homepage.gql'

definePageMeta({
  layout: "default",
});

// const route = useRoute()
// const { slug, xCraftLivePreview, token } = route.query
//
//
// console.log('Output Query Params Stuff')
// console.log(route)
// console.log({slug, xCraftLivePreview, token})
//
// const data = useFetch(`http://content.baukasten.test/api?token=${token}`, {
//   method: 'POST',
//   body: {
//     query: `query homepage($slug: [String] = "") {
//               entry(slug: $slug) {
//                 id
//                 title
//                 ... on home_home_Entry {
//                   entryCustomTitle
//                 }
//               }
//             }`,
//     variables: {
//       slug: 'home'
//     }
//   },
//   headers: {
//     'Content-Type': 'application/json',
//     // 'x-craft-live-preview': xCraftLivePreview
//   },
//   // transform: preview => preview.data
// })
//
// console.log(data)

// const { data: preview } = useFetch(`https://mysite.com/api?token=${token}`, {
//   method: 'POST',
//   body: {
//     query: `query {ping}`,
//     variables: {
//       slug: slug
//     }
//   },
//   headers: {
//     'Content-Type': 'application/json',
//     'x-craft-live-preview': xCraftLivePreview
//   },
//   transform: preview => preview.data.entry
// })


// Fetch Pages Data
const {
  data: {value: {entriesPages}},
  refresh: refreshPages
} = await useAsyncData('entriesPages', () => GqlEntriesPages({
  section: ["pages"],
  queryEntryImage: true,
}));

console.log(entriesPages)


// Fetch Error Pages Data
// const {
//   data: {value: {entriesErrorPages}},
//   refresh: refreshErrorPages
// } = await useAsyncData('entriesErrorPages', () => GqlEntriesErrorPages({
//   section: ["errorPages"],
// }));
</script>
