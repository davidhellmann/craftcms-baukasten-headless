type NestedObject<T> = {
  [K: string]: T | NestedObject<T>;
};

interface IComponent extends NestedObject {}

interface IComponentConfig<T> extends NestedObject {
  name: T;
  root: T;
  rootClasses: T;
  variants: NestedObject<T>;
}

interface IComponentClasses<T> extends NestedObject {
  [k: string]: T;
}

interface IViews<T> {
  [key: string]: {
    [key: string]: T;
  };
}

interface IPreviewTokens {
  token?: string;
  xCraftPreview?: string;
  xCraftLivePreview?: string;
}
