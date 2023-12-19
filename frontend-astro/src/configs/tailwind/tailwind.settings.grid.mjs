/*
 * Tailwind Grid Settings
 */

const cols = 24;
const createItems = (count, keyPrefix, output) => {
  return Array.from(new Array(count + 1), (index) => index).reduce(
    (a, b) => ({
      ...a,
      [`${keyPrefix}${b}`]: output.split("$$$").join(`${b}`),
    }),
  );
};

export default {
  gridTemplateColumns: createItems(cols, "", `repeat($$$, minmax(0, 1fr))`),
  gridColumn: createItems(cols, "span-", `span $$$ / span $$$`),
  gridRowStart: createItems(cols, "", `$$$`),
  gridRowEnd: createItems(cols, "", `$$$`),
};
