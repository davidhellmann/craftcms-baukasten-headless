import { getVariantClasses } from "@/utils/getVariantClasses";
import { mergeObjects } from "@/utils/mergeObjects";

// Optional. Just an example of how to use a custom config file
import { customConfig } from "./Headline.config";

type TConfigKeys = "size" | "weight";
type TConfigBlock = {
  [key: string | "DEFAULT"]: string;
};

interface IHeadline {
  compName?: string;

  // Optional. Just an example of how to use a custom config file
  configName?: keyof typeof customConfig | "";
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
  text: string;
  customClasses?: string;
  size?:
    | "DEFAULT"
    | "9xl"
    | "8xl"
    | "7xl"
    | "6xl"
    | "5xl"
    | "4xl"
    | "3xl"
    | "2xl"
    | "xl"
    | "lg"
    | "base"
    | "sm"
    | "xs";
  weight?: "DEFAULT" | "extrabold" | "bold" | "semibold" | "normal";
  center?: boolean;
}

const VARIANTS_SIZE: TConfigBlock = {
  DEFAULT: "text-3xl",
  "9xl": "text-9xl tracking-tighter",
  "8xl": "text-8xl",
  "7xl": "text-7xl",
  "6xl": "text-6xl",
  "5xl": "text-5xl",
  "4xl": "text-4xl",
  "3xl": "text-3xl",
  "2xl": "text-2xl",
  xl: "text-xl",
  lg: "text-lg",
  base: "text-base",
  sm: "text-sm",
  xs: "text-xs",
};

const VARIANTS_WEIGHT: TConfigBlock = {
  DEFAULT: "font-bold",
  extrabold: "font-extrabold",
  bold: "font-bold",
  semibold: "font-semibold",
  medium: "font-medium",
  normal: "font-normal",
};

export const Headline = ({
  compName = "Headline",
  configName = "",
  tag: TagName = "h2",
  text,
  customClasses = "",
  size = "DEFAULT",
  weight = "bold",
  center = false,
}: IHeadline) => {
  let config: Record<TConfigKeys, TConfigBlock> = {
    size: VARIANTS_SIZE,
    weight: VARIANTS_WEIGHT,
  };

  // Optional. Just an example of how to use a custom config file
  if (configName && customConfig && configName in customConfig) {
    config = mergeObjects(
      config as Record<TConfigKeys, TConfigBlock>,
      (customConfig[configName] as Partial<Record<string, TConfigBlock>>) ?? {},
    ) as Record<TConfigKeys, TConfigBlock>;
  }

  const cc: { [k: string]: string } = {
    rootClasses: `
      relativ
      ${getVariantClasses(config?.size as TConfigBlock, size)}
      ${getVariantClasses(config?.weight as TConfigBlock, weight)}
      ${center ? "text-center" : ""}
    `,
  };

  return (
    <>
      {text && TagName && (
        <TagName
          data-comp={compName}
          data-comp-config={configName}
          className={`${cc.rootClasses} ${customClasses}`}
        >
          {text}
        </TagName>
      )}
    </>
  );
};
