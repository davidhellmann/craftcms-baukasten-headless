import { merge } from "lodash";

interface IMergeObjects {
  globalConfig: IComponentConfig<string>;
  customConfig: IComponentConfig<string>;
}

export const mergeObjects = (params: IMergeObjects) => {
  return merge({}, params?.globalConfig, params?.customConfig);
};
