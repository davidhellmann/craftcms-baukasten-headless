import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', () => {
  const translations = ref([])
  return { translations }
})
