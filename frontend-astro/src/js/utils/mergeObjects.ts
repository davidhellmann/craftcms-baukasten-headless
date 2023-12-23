import { merge } from "lodash";

export const mergeObjects = <T>(globalConfig: T, customConfig: T) => {
  return merge({}, globalConfig, customConfig);
};
