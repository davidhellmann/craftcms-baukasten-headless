import { ui, defaultSite } from "./ui";

export function useTranslations(site: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultSite]) {
    return ui[site][key] || ui[defaultSite][key] || "MISSING TRANSLATION";
  };
}

// Use this for a nested object
// export function useTranslations(site: keyof typeof ui) {
//   return function t(key: keyof (typeof ui)[typeof defaultSite]) {
//     if (typeof key === "string") {
//       const keys = key.split(".");
//       let value: ITranslations | undefined = ui[site];
//
//       for (let i = 0; i < keys.length; i++) {
//         if (!value?.hasOwnProperty(keys[i])) {
//           value = undefined;
//           break;
//         }
//         value = value[keys[i]];
//       }
//
//       return value || "MISSING TRANSLATION";
//     } else {
//       return "MISSING TRANSLATION";
//     }
//   };
// }
