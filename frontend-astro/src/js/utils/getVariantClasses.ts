export const getVariantClasses = <T>(options: T, selection: keyof T) => {
  const DEFAULT = "DEFAULT" as keyof T;
  return options[selection] ?? options[DEFAULT] ?? "";
};
