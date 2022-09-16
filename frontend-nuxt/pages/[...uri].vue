<template>
  <div>
    <nav>
      <ul class="flex flex-row flex-wrap gap-4 mb-8">
        <li v-for="item in entriesAll" :key="item.id">
          <nuxt-link :to="`/${currentSite.urlParameterTrailingSlash}${item.uri === '__home__' ? '' : item.uri}`" class="bg-gray-100 rounded-lg px-4 py-2 inline-block">
            {{item.title}}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <Component :is="renderView" v-if="entry"
               :entry="entry"
               :current-site-handle="currentSite.handle"
               :current-site-language="currentSite.language"/>
  </div>
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


// Query All Entries
const {
  data: {value: {entriesAll}}
}: IGQLQueryResponse = await useAsyncGql('entriesAll', {
  section: ['pages', 'news', 'home'],
  site: currentSite.handle
});


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


