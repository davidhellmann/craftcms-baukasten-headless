interface IGetCurrentSiteData {
  id: number;
}

import { configSites } from 'src/config/sites';

export const getCurrentSiteData = (params: IGetCurrentSiteData) => {
  const { id } = params;
  return configSites.find((site) => site.siteId === id);
};
