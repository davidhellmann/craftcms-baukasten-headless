interface IFirstLetterToUppercase {
  text: string,
}

export const useFirstLetterUppercase = (params: IFirstLetterToUppercase) => {
  if (!params.text) return
  return params.text.charAt(0).toUpperCase() + params.text.slice(1);
}
