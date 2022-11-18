interface ISetCompVariants {
  variants: {
    [k: string]: string;
  };
  props: {
    [k: string]: string;
  };
  useVariants: string[];
}

export const setCompVariants = (params: ISetCompVariants) => {
  const { variants, props, useVariants } = params;
  const classArray: string[] = [];
  const finalProps: {
    [k: string]: string;
  } = {};

  useVariants.forEach((useVariants) => {
    finalProps[useVariants] = props[useVariants];
  });

  for (let prop in finalProps) {
    if (prop in finalProps) {
      const variant: Object = variants[prop];
      const setting = finalProps[prop];

      if (setting) {
        if ((variant as any).default) {
          classArray.push((variant as any)[setting] || (variant as any).default);
        } else {
          classArray.push((variant as any)[setting]);
        }
      }
    }
  }

  return classArray.filter((item) => item !== undefined);
};
