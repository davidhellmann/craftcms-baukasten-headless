import { setCompVariants as scv } from "@/utils/setCompVariants";
import { mergeObjects } from "@/utils/mergeObjects";
import { customConfig } from "./Headline.config";

// Types
interface IHeadline extends IComponent {
  configName?: keyof typeof customConfig | "";
  text: string;
  rootClasses?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
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

const VARIANTS_SIZE = {
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

const VARIANTS_WEIGHT = {
  DEFAULT: "font-bold",
  extrabold: "font-extrabold",
  bold: "font-bold",
  semibold: "font-semibold",
  medium: "font-medium",
  normal: "font-normal",
};

const computeComponentConfig = ({
  configName,
  size,
  weight,
  center,
}: {
  configName: keyof typeof customConfig | "";
  size: string;
  weight: string;
  center: boolean;
}) => {
  // Comp Settings
  let config: IComponentConfig<string> = {
    name: "Headline",
    rootEl: "relativ",
    variants: {
      size: VARIANTS_SIZE,
      weight: VARIANTS_WEIGHT,
    },
  };

  if (configName && customConfig && configName in customConfig) {
    config = mergeObjects({
      globalConfig: config,
      customConfig: customConfig[configName] ?? {},
    });
  }

  const cc: IComponentClasses<string> = {
    rootEl: `${config.rootEl} ${scv(config?.variants ?? {}, {
      size,
      weight,
    })} ${center && "text-center"}`,
  };
  return cc;
};

export const Headline = ({
  text,
  tag: TagName = "h2",
  rootClasses = "",
  configName = "",
  size = "DEFAULT",
  weight = "bold",
  center = false,
}: IHeadline) => {
  const cc = computeComponentConfig({
    configName,
    size,
    weight,
    center,
  });

  return (
    <>
      {text && TagName && (
        <TagName className={`${cc.rootEl} ${rootClasses}`}>{text}</TagName>
      )}
    </>
  );
};
