<template>
  <footer class="bg-gray-100">
    <div class="container py-4 flex flex-row justify-between">
      Baukasten Headless ©2014 — {{ currentYear }}

      <ul class="flex flex-row gap-4">
        <li v-for="site in siteStore.getLangSwitcherUrls" :key="site.siteId">
          <NuxtLink :to="site.url" :class="[
              (currentSite.locale === site.language
              || !currentSite.locale && site.language === 'en'
              || !configSites.find(x => x.language === currentSite.locale) && site.language === 'en')
              ? 'font-bold'
              : ''
            ]">
            {{ site.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {configSites} from "~/config/sites";
import {useSiteStore} from "~/stores/useSiteStore";
const siteStore = useSiteStore()

const route = useRoute()
const currentSite = computed(() => route.params)
const currentYear = new Date().getFullYear()
</script>

