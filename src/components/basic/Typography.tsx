import clsx from "clsx";
import { createElement, forwardRef } from "react";

export type TypographyProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "div";
  align?: "left" | "center" | "right" | "justify" | "start" | "end";
  className?: string;
  color?:
    | "white"
    | "black"
    | "primary"
    | "secondary"
    | "slate-700"
    | "gray-600"
    | "gray-800";
  fontFamily?: "sans" | "serif" | "mono" | "roboto";
  fontWeight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold";
  fontSize?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  italic?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
};

const ALIGN_MAPPING = {
  left: "text-start",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  start: "text-start",
  end: "text-end",
};

const COLOR_MAPPING = {
  white: "text-white",
  black: "text-black",
  primary: "text-primary",
  secondary: "text-secondary",
  "slate-700": "text-slate-600",
  "gray-800": "text-gray-800",
};

const FONT_FAMILY_MAPPING = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
  roboto: "font-roboto",
};

const FONT_WEIGHT_MAPPING = {
  thin: "font-thin",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const FONT_SIZE_MAPPING = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const Typography = forwardRef(function TypographyWithRef(
  {
    as = "span",
    align,
    className,
    color = "gray-800",
    fontFamily,
    fontWeight,
    fontSize = "base",
    italic,
    underline,
    uppercase,
    capitalize,
    children,
  }: TypographyProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const classes = clsx(
    className,
    underline && "underline",
    italic && "italic",
    uppercase && "uppercase",
    capitalize && "capitalize",
    align && ALIGN_MAPPING[align],
    !!fontWeight && FONT_WEIGHT_MAPPING[fontWeight],
    !!fontFamily && FONT_FAMILY_MAPPING[fontFamily],
    !!fontSize && FONT_SIZE_MAPPING[fontSize],
    !!color && COLOR_MAPPING[color]
  );

  return (
    <>
      {createElement(
        as,
        {
          ref,
          className: classes,
        },
        children
      )}
    </>
  );
});

export default Typography;
