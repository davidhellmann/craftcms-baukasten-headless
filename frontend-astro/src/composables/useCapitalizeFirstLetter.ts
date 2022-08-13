interface ICapitalizeFirstLetter {
  string: string;
}

export const useCapitalizeFirstLetter = (params: ICapitalizeFirstLetter) => {
  return params.string.charAt(0).toUpperCase() + params.string.slice(1);
}