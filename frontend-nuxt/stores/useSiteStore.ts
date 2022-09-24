import {defineStore} from 'pinia'
import {useStorage} from "@vueuse/core";
import {configSites, IConfigSites} from '~/config/sites'

interface IStateNavigationMain {
  id: string,
  nodeUri: string,
  siteId: number,
  classes: string | null,
  customAttributes: string[],
  newWindow: string,
  urlSuffix: string | null
}

interface IStateLocalizations {
  siteId: number,
  uri: string,
}

interface IStateTranslations {
  key: string,
  message: string | null,
  language: number,
}

interface State {
  currentSite: IConfigSites | null
  currentUri: string
  navigationMain: IStateNavigationMain[]
  translations: IStateTranslations[]
  localizations: IStateLocalizations[]
}


export const useSiteStore = defineStore('site', {
  state: () => ({
    currentSite: useStorage('currentSite', null as IConfigSites | null),
    currentUri: useStorage('currentUri', '' as string),
    navigationMain: useStorage('navigationMain', [] as IStateNavigationMain[]),
    translations: useStorage('translations', [] as IStateTranslations[]),
    localizations: useStorage('localizations', [] as IStateLocalizations[]),
  }),
  hydrate(state) {
    // @ts-ignore
    state.currentSite = useStorage('currentSite', null as IConfigSites | null),
      // @ts-ignore
    state.currentUri = useStorage('currentUri', '' as string),
      // @ts-ignore
    state.navigationMain = useStorage('navigationMain', [] as IStateNavigationMain[]),
      // @ts-ignore
    state.translations = useStorage('translations', [] as IStateTranslations[]),
      // @ts-ignore
    state.localizations = useStorage('localizations', [] as IStateLocalizations[])
  },
  actions: {
    addCurrentSite(currentSite) {
      this.currentSite = currentSite;
    },
    addCurrentUri(currentUri) {
      this.currentUri = currentUri;
    },
    addNavigationMain(navigationMain) {
      this.navigationMain = [...navigationMain];
    },
    addTranslations(translations) {
      this.translations = [...translations];
    },
    addLocalizations(localizations) {
      this.localizations = [...localizations];
    },
  },
  getters: {
    getLangSwitcherUrls(state): object[] {
      const urls: {
        url: string,
        title: string,
        language: string,
        primary: boolean,
        siteId: number,
      }[] = []

      configSites.forEach((site, index) => {
        const getMatchingEntry = state.localizations.find(x => x.siteId === site.siteId) || null
        const urlParameter: string = site.urlParameter ? `/${site.urlParameter}` : ''
        let uri: string = state.currentUri.length > 0 && state.currentUri !== '__home__' ? `/${state.currentUri}` : ''

        if (getMatchingEntry && getMatchingEntry.uri !== '__home__') {
          uri = `/${getMatchingEntry.uri}`
        }

        if (!getMatchingEntry) {
          uri = ''
        }

        urls.push({
          url: urlParameter || uri ? `${urlParameter}${uri}` : '/',
          title: site.language,
          language: site.language,
          primary: site.primary,
          siteId: site.siteId
        })
      })

      return urls.sort((a, b) => a.primary ? -1 : 1)
    },
    getSiteUrlLocale(state): string {
      return `/${state.currentSite.urlParameterTrailingSlash}`
    }
  },
})
