import { setCompVariants } from "@/utils/setCompVariants";
import { mergeObjects } from "@/utils/mergeObjects";
import { customConfig } from "./config.Headline.ts";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
type Weight = "DEFAULT" | "extrabold" | "bold" | "semibold" | "normal";
type Size =
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

interface IHeadline extends IComponent {
  configName?: keyof typeof customConfig | "";
  text: string;
  rootClasses?: string;
  tag?: Tag;
  size?: Size;
  weight?: Weight;
  center?: boolean;
}

export const Headline = ({
  rootClasses = "",
  configName = "",
  text,
  tag: TagName = "h2",
  size = "DEFAULT",
  weight = "bold",
  center = false,
}: IHeadline) => {
  // Comp Settings
  let config: IComponentConfig<string> = {
    name: "Headline",
    root: "relativ",
    variants: {
      size: {
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
      },
      weight: {
        DEFAULT: "font-bold",
        extrabold: "font-extrabold",
        bold: "font-bold",
        semibold: "font-semibold",
        medium: "font-medium",
        normal: "font-normal",
      },
    },
  };

  if (configName && customConfig && configName in customConfig) {
    config = mergeObjects({
      config: config,
      customConfig: customConfig[configName] ?? {},
    });
  }

  // Comp Classes
  const cc: IComponentClasses<string> = {
    root: `${config.root} ${rootClasses} ${setCompVariants(
      config.variants ?? {},
      {
        size,
        weight,
      },
    )} ${center ? "text-center" : ""}`,
  };

  // Template
  return (
    <>{text && TagName && <TagName className={cc.root}>{text}</TagName>}</>
  );
};
