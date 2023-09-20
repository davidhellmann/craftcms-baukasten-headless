export const setCompVariants = (
  variants: { [k: string]: string },
  props: { [k: string]: string }
) => {
  const finalClassesArray: string[] = [];

  // TODO: Add default fallback variant
  Object.entries(props).forEach(([key, value]) => {
    const variant: {} = variants[key];
    if (variant && value in variant) {
      const variantValue: string = (variant as any)[value];
      if (!finalClassesArray.includes(variantValue)) {
        if ((variant as any).default) {
          finalClassesArray.push(
            (variant as any)[value] || (variant as any).default
          );
        } else {
          finalClassesArray.push((variant as any)[value]);
        }
      }
    }
  });

  return finalClassesArray.join(" ");
};
