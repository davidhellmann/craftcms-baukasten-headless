interface ICapitalizeFirstLetter {
  string: string;
}

export const capitalizeFirstLetter = (params: ICapitalizeFirstLetter) => {
  return params.string.charAt(0).toUpperCase() + params.string.slice(1);
};
