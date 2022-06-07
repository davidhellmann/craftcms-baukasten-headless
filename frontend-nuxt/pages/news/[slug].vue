<script lang="ts" setup>
const route = useRoute();
let livePreviewToken = '';
let previewToken = '';
let token = '';
const entryNews = ref({});




// if (process?.client) {
//   // Get tokens
//   let hashes = window.location.search.slice(window.location.search.indexOf('?') + 1).split('&')
//   let params = {}
//   hashes.map(hash => {
//     let [key, val] = hash.split('=')
//     params[key] = decodeURIComponent(val)
//   })
//
//   livePreviewToken = params['x-craft-live-preview'];
//   previewToken = params['x-craft-preview'];
//   token = params['token']
//
//   if (token && (livePreviewToken || previewToken)) {
//     console.log('SET HEADERS')
//     useGqlHeaders({
//       token: token,
//       'x-craft-live-preview': livePreviewToken,
//       'x-craft-preview': previewToken,
//     })
//   }
//
//   const {
//     data: {value: {entryNews}},
//     refresh: refreshEntry
//   } = await useAsyncData('entryNews', () => GqlEntryNews({
//     section: ["news"],
//     slug: route.params.slug,
//     queryEntryImage: true,
//   }));
//
//   console.log(entryNews)
//
// } else {
//   const {
//     data: {value: {entryNews}},
//     refresh: refreshEntry
//   } = await useAsyncData('entryNews', () => GqlEntryNews({
//     section: ["news"],
//     slug: route.params.slug,
//     queryEntryImage: true,
//   }));
// }



</script>

<template>
  <div>
    <NuxtLink to="/news">News</NuxtLink>
    <h1>{{ entryNews?.title }}</h1>
  </div>
</template>

<style scoped></style>
