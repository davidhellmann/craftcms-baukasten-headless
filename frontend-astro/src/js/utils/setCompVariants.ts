const pushVariantValue = (
  variant: NestedObject<string>,
  variantValue: string,
  finalClassesArray: string[],
) => {
  if (finalClassesArray.includes(variantValue)) return;

  const valueToPush = variantValue || variant.DEFAULT;
  finalClassesArray.push(valueToPush as string);
};

export const setCompVariants = (
  variants: NestedObject<string>,
  props: { [k: string]: string },
) => {
  const finalClassesArray: string[] = [];

  Object.entries(props).forEach(([key, value]) => {
    const variant = variants[key] as NestedObject<string>;

    if (variant && value in variant) {
      const variantValue = variant[value] as string;
      pushVariantValue(variant, variantValue, finalClassesArray);
    }
  });

  return finalClassesArray.join(" ");
};
