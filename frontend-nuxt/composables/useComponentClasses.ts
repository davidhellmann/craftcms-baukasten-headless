interface IComponentClasses {
  props: {
    tw: string,
    [key: string]: string
  },
  variants: {
    value: {
      defaultStyles: string,
      [key: string]: string|object
    }
  },
}

export const useComponentClasses = (params = {
  props: {
    tw: ''
  },
  variants: {
    value: {
      defaultStyles: ''
    }
  },
} as IComponentClasses) : string[] => {
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
};
