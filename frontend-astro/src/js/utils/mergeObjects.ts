// @ts-expect-error // Load the lodash-es package
import { merge } from "lodash-es";

export const mergeObjects = <T>(globalConfig: T, customConfig: T) => {
  return merge({}, globalConfig, customConfig);
};
