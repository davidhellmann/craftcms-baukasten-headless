<template>
  <header class="bg-gray-100 shadow-md">
    <div class="container flex justify-between items-center gap-4 py-4 items-center w-full">
      <h1 class="text-xl">
        <NuxtLink :to="`/${siteStore?.currentSite?.urlParameter || ''}`">
          BKSTN HDLSS
        </NuxtLink>
      </h1>

      <SwitcherTheme/>
      <nav v-if="siteStore && siteStore.navigationMain" class="ml-auto relative">
        <ul :class="['flex-col flex-wrap gap-2 absolute right-0 top-10 w-96 bg-gray-300 p-8 rounded-md transition-all duration-700 ', isNavOpen ? 'flex skew-y-7' : 'hidden md:flex skew-y-6']">
          <li v-for="item in siteStore.navigationMain" :key="item.id">
            <NuxtLink :to="`${siteStore.getSiteUrlLocale}${item.nodeUri}`"
                      class="bg-gray-100 rounded-lg px-2 py-1 text-xs font-bold inline-block hover:bg-primary-200 transition duration-300 [&.router-link-exact-active]:bg-primary-700 [&.router-link-exact-active]:text-white">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
        <button class="w-8 h-8 bg-gray-300" @click="isNavOpen = !isNavOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>


<script lang="ts" setup>
import {useSiteStore} from "~/stores/useSiteStore";
const siteStore = useSiteStore()

const isNavOpen = ref(false)

</script>
