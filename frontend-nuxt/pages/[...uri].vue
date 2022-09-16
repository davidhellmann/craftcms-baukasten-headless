<template>
  <Component :is="renderView" v-if="entry"
             :entry="entry"
             :current-site-handle="currentSite.handle"
             :current-site-language="currentSite.language"/>
</template>

<script lang="ts" setup>
// Interfaces
interface IGQLQueryResponse {
  data: any,
  refresh: any
}

// Imports
import {useGetCurrentSiteData} from '~/composables/useGetCurrentSite';
import {useResolveEntryComponent} from "~/composables/useResolveEntryComponent";
import {useSiteStore} from "~/stores/useSiteStore";

// Data
const route = useRoute()
const {path, params: {uri}} = route;
const notDefaultSite = useGetCurrentSiteData({locale: uri[0]});
const currentSite = notDefaultSite ? notDefaultSite : useGetCurrentSiteData({locale: 'en'})

let finalUri = notDefaultSite ? uri.slice(1) : uri;
finalUri = path.endsWith('/') ? finalUri.slice(0, -1) : finalUri
finalUri = typeof finalUri === 'object' ? finalUri.join('/') : finalUri


// Fetch Data
// const {
//   data: {value: {entry}}
// }: IGQLQueryResponse = await useAsyncData('entry', () => GqlEntry({
//   uri: finalUri || '__home__',
//   section: "*",
//   site: currentSite.handle
// }));

const {
  data: {value: {entry}}
}: IGQLQueryResponse = await useAsyncGql('entry', {
  uri: finalUri || '__home__',
  section: "*",
  site: currentSite.handle
});

// Render 404
if (!entry) {
  throw createError({
    fatal: true,
    statusCode: 404
  })
}

// View Resolver
const renderView = await resolveComponent(useResolveEntryComponent({entry}))

// Static Translations
const siteStore = useSiteStore()

const {
  data: {value: {translations}}
}: IGQLQueryResponse = await useAsyncGql('translations', {
  language: currentSite.language
});

siteStore.$patch({
  translations: translations.filter(item => item.message !== null)
})
</script>


