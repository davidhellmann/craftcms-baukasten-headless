interface IGetCurrentSiteData {
  locale: string
}

import { configSites } from "~/config/sites";

export const useGetCurrentSiteData = (params: IGetCurrentSiteData) => {
  const { locale } = params
  return configSites.find((site) => site.language === locale)
}
