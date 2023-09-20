interface IGetCurrentSiteData {
  handle: string;
}

import { CONFIG_SITES } from "@configs/sites";

export const getCurrentSiteData = (params: IGetCurrentSiteData) => {
  const { handle } = params;
  return CONFIG_SITES.find((site) => site.handle === handle);
};
