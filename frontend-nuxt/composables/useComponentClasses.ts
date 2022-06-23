interface IComponentClasses {
  props: {
    tw?: string,
    [key: string]: string|object
  },
  variants: {
    value: {
      defaultStyles?: string,
      [key: string]: string | object
    }
  },
}

export const useComponentClasses = (params = {
  props: {},
  variants: {},
} as IComponentClasses) : object => {
  return computed(() => {
    const variantClasses = Object.keys(params.props).reduce((previousValue, currentValue) => {
      if (Object.keys(params.variants?.value).includes(currentValue)) {
        previousValue.push(params.variants?.value[currentValue][params.props[currentValue]]);
      }
      return previousValue;
    }, [])

    return [
      params.variants?.value?.defaultStyles,
      ...variantClasses,
      params.props?.tw,
    ]
  });
};

// Alternative without function
// const componentClasses = computed(() : string[] => {
//   return [
//     variants.value.defaultStyles,
//     variants.value.style[props.style],
//     variants.value.color[props.color],
//     variants.value.size[props.size],
//     props.tw,
//   ]
// })
