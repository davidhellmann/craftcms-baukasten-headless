<template>
  <div>
    <nav>
      <ul class="flex flex-row flex-wrap gap-4 mb-8">
        <li v-for="item in navigation" :key="item.id">
          <nuxt-link :to="`/${currentSite.urlParameterTrailingSlash}${item.uri === '__home__' ? '' : item.uri}`" class="bg-gray-100 rounded-lg px-4 py-2 inline-block">
            {{ item.title }}
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
import {useGetUri} from '~/composables/useGetUri';
import {useResolveEntryComponent} from "~/composables/useResolveEntryComponent";
import {useSiteStore} from "~/stores/useSiteStore";

// Data
const route = useRoute()
const router = useRouter()
const {path, params: {locale, uri}} = route;

const matchingSite = useGetCurrentSiteData({locale: locale as string})
const currentSite = matchingSite || useGetCurrentSiteData({locale: 'en'})

// Fetch Data
const {
  data: {value: {entry}}
}: IGQLQueryResponse = await useAsyncGql('entry', {
  uri: useGetUri({
    matchingSite: matchingSite,
    uri: uri,
    locale: locale,
    path: path
  }),
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
  data: {value: {navigation}}
}: IGQLQueryResponse = await useAsyncGql('navigation', {
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


