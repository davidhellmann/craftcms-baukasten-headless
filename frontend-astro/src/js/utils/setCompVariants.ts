const pushVariantValue = (
  variant: any,
  variantValue: string,
  finalClassesArray: string[]
) => {
  if (finalClassesArray.includes(variantValue)) return;

  const valueToPush = variantValue || variant.DEFAULT;
  finalClassesArray.push(valueToPush);
}

export const setCompVariants = (
  variants: { [key: string]: { [key: string]: string } },
  props: { [k: string]: string },
) => {
  const finalClassesArray: string[] = [];

  Object.entries(props).forEach(([key, value]) => {
    const variant = variants[key];

    if (variant && value in variant) {
      const variantValue = variant[value];
      pushVariantValue(variant, variantValue, finalClassesArray);
    }
  });

  return finalClassesArray.join(" ");
};
