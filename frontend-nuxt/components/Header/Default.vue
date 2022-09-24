<template>
  <header class="bg-gray-100 shadow-md">
    <div class="container flex justify-between items-center gap-4 py-4 items-center w-full">
      <h1 class="text-xl">
        <NuxtLink :to="`/${siteStore?.currentSite?.urlParameter || ''}`">
          BKSTN HDLSS
        </NuxtLink>
      </h1>

      <nav v-if="siteStore && siteStore.navigationMain" class="ml-auto">
        <ul class="flex flex-row flex-wrap gap-2">
          <li v-for="item in siteStore.navigationMain" :key="item.id">
            <NuxtLink :to="`${siteStore.getSiteUrlLocale}${item.nodeUri}`"
                      class="bg-gray-100 rounded-lg px-2 py-1 text-xs font-bold inline-block hover:bg-primary-200 transition duration-300 [&.router-link-exact-active]:bg-primary-700 [&.router-link-exact-active]:text-white">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <SwitcherTheme/>
    </div>
  </header>
</template>


<script lang="ts" setup>
import {useSiteStore} from "~/stores/useSiteStore";

const siteStore = useSiteStore()

</script>
