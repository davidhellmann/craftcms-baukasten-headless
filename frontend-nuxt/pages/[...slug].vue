<template>
  <Component :is="renderView" v-if="entry"
             :entry="entry"
             :current-site-handle="currentSiteHandle"
             :current-site-language="currentSiteLanguage"/>
</template>

<script lang="ts" setup>
// Interfaces
interface IGQLQueryResponse {
  data: any,
  refresh: any
}

// Imports
import {useGetCurrentSite} from "~/composables/useGetCurrentSite";
import {useResolveEntryComponent} from "~/composables/useResolveEntryComponent";
import {useSiteStore} from "~/stores/useSiteStore";

// Data
const route = useRoute()
const {path, params: {slug}} = route;
const {
  handle: currentSiteHandle,
  language: currentSiteLanguage
} = useGetCurrentSite({path})


// View Resolver
const {
  data: {value: {entry}}
}: IGQLQueryResponse = await useAsyncData('entry', () => GqlEntry({
  slug: path.endsWith('/') ? slug.slice(-2)[0] : slug.slice(-1)[0],
  section: "pages",
  site: currentSiteHandle
}));

const renderView = await resolveComponent(useResolveEntryComponent({entry}))


// Static Translations
const siteStore = useSiteStore()

const {
  data: {value: {translations}}
}: IGQLQueryResponse = await useAsyncData('translations', () => GqlTranslations({
  language: currentSiteLanguage
}));

siteStore.$patch({
  translations: translations.filter(item => item.message !== null)
})
</script>


<style scoped></style>
