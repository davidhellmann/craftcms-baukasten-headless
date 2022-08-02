<template>
  <div>
    <template v-if="entry">
      <Component :is="renderView" :entry="entry" :current-site-handle="currentSiteHandle"/>
    </template>
  </div>
</template>

<script lang="ts" setup>
// Interfaces
interface IGQLQueryResponse {
  data: any,
  refresh: any
}

// Imports
import {getCurrentInstance} from "vue";
import {useFirstLetterUppercase} from "~/composables/useFirstLetterUppercase";
import {useGetCurrentSite} from "~/composables/useGetCurrentSite";

// Data
const route = useRoute()
const { path, params: { slug } } = route;
const currentSiteHandle = useGetCurrentSite({path})

// Fetch Pages Data
const {
  data: {value: {entry}}
}: IGQLQueryResponse = await useAsyncData('entry', () => GqlEntry({
  slug: slug.slice(-1)[0],
  section: "pages",
  site: currentSiteHandle
}));



const resolveDynamicComp = () => {
  const instance = getCurrentInstance();
  const sectionHandle = useFirstLetterUppercase({text: entry.sectionHandle})
  const typeHandle = useFirstLetterUppercase({text: entry.typeHandle})
  const compToResolve = `Views${sectionHandle}${typeHandle}`

  return typeof instance?.appContext.components === "object" &&
  compToResolve in instance.appContext.components ? compToResolve : 'ViewsDefault'
}

const renderView = resolveComponent(resolveDynamicComp())
</script>


<style scoped></style>
