interface IGetCurrentSiteData {
  id: number;
}

import { configSites } from "src/config/sites";

export const useGetCurrentSiteData = (params: IGetCurrentSiteData) => {
  return configSites[params.id];
};

export const findAllExpectPrimary = (outputKeyAsArray: 'handle' | 'language') => {
  const matchingSites = Object.values(configSites).filter(x => !x.primary)
  
  const output: string[] = []
  matchingSites.forEach(item => output.push(item[outputKeyAsArray]))
  return output as string[]
}