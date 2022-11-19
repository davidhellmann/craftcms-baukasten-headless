interface IGetCurrentSiteData {
  id: number;
}

import { configSites } from '../lib/constants';

export const getCurrentSiteData = (params: IGetCurrentSiteData) => {
  const { id } = params;
  return configSites.find((site) => site.siteId === id);
};
