import {defineStore} from 'pinia'
import {configSites, IConfigSites} from '~/config/sites'

interface IStateNavigationMain {
  id: string,
  nodeUri: string,
  siteId: number,
  classes: string|null,
  customAttributes: string[],
  newWindow: string,
  urlSuffix: string|null
}
interface IStateLocalizations {
  siteId: number,
  uri: string,
}
interface IStateTranslations {
  key: string,
  message: string|null,
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
  state: (): State => ({
    currentSite: null,
    currentUri: '',
    navigationMain: [],
    translations: [],
    localizations: [],
  }),
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
