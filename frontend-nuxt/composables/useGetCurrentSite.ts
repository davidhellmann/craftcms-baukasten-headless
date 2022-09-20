interface IGetCurrentSiteData {
  locale: string;
}

import { configSites } from "~/config/sites";

export const useGetCurrentSiteData = (params: IGetCurrentSiteData) => {
  const { locale } = params;
  return configSites.find((site) => site.language === locale);
};

export const findAllExpectPrimary = (outputKeyAsArray: 'handle' | 'language') => {
  const matchingSites = Object.values(configSites).filter(x => !x.primary)

  const output: string[] = []
  matchingSites.forEach(item => output.push(item[outputKeyAsArray]))
  return output as string[]
}
