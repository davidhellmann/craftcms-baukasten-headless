import { merge } from "lodash";

interface IMergeObjects {
  config: IComponentConfig<string>;
  customConfig: IComponentConfig<string>;
}

export const mergeObjects = (params: IMergeObjects) => {
  return merge({}, params?.config, params?.customConfig);
};
