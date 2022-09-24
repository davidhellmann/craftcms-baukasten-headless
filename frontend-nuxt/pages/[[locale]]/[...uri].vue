<template>
  <div>
    <Component :is="renderView" v-if="entry"
               :entry="entry"
               :current-site-handle="currentSite.handle"
               :current-site-language="currentSite.language"/>
  </div>
</template>

<script lang="ts" setup>

// Imports
import {useGetCurrentSiteData} from '~/composables/useGetCurrentSite';
import {useGetUri} from '~/composables/useGetUri';
import {useResolveEntryComponent} from "~/composables/useResolveEntryComponent";
import {useSiteStore} from "~/stores/useSiteStore";

// Interfaces
interface IGQLQueryResponse {
  data: any,
  refresh: any
}


// Data
const route = useRoute()
const {path, params: {locale, uri}} = route;
const siteStore = useSiteStore()
const matchingSite = useGetCurrentSiteData({locale: locale as string})
const currentSite = matchingSite ? matchingSite : useGetCurrentSiteData({locale: 'en'})
const finalUri = useGetUri({
  matchingSite: matchingSite,
  uri: uri,
  locale: locale,
  path: path
})

// Fetch Entry Data
const {
  data: {value: {entry}}
}: IGQLQueryResponse = await useAsyncGql('entry', {
  uri: finalUri,
  section: "*",
  site: currentSite.handle
});

// Fetch Navigation Data
const {
  data: {value: {navigationMain}}
}: IGQLQueryResponse = await useAsyncGql('navigation', {
  navHandle: 'navigationMain',
  site: currentSite.handle
});

// Fetch Translation Data
const {
  data: {value: {translations}}
}: IGQLQueryResponse = await useAsyncGql('translations', {
  language: currentSite.language
});

// Render 404
if (!entry) {
  throw createError({
    fatal: true,
    statusCode: 404
  })
}

// Fill Site Store
siteStore.addCurrentSite(currentSite || null)
siteStore.addCurrentUri(finalUri || '')
siteStore.addNavigationMain(navigationMain || [])
siteStore.addTranslations(translations ? translations.filter(item => item.message !== null) : [])
siteStore.addLocalizations(entry?.localized || [])

// siteStore.$patch({
//   translations: translations ? translations.filter(item => item.message !== null) : []
// })

// View Resolver
const renderView = await resolveComponent(useResolveEntryComponent({entry}))
</script>
