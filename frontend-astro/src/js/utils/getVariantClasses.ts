export const getVariantClasses = (
  options: Config<string>,
  selection: string,
) => {
  return options[selection] ?? options["DEFAULT"] ?? "";
};
