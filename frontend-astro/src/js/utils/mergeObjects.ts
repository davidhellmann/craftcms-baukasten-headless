import { merge } from "lodash";

export const mergeObjects = (
  globalConfig: Config<string>,
  customConfig: Config<string>,
) => {
  return merge({}, globalConfig, customConfig);
};
