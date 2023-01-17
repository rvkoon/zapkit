import { createElement, ReactNode } from "react";
import cx from "classnames";
import classNames from "classnames";

export type TypographyComponent =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";
export type TypographyVariant =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";
export type TypographyColors = "primary" | "secondary" | "light";

export interface ITypographyProps {
  component?: TypographyComponent;
  variant?: TypographyVariant;
  content: string | ReactNode;
  color?: string;
  className?: string;
}

export function Typography({
  component = "p",
  variant = "p",
  content,
  color = "primary",
  className,
}: ITypographyProps): JSX.Element {
  const isSecondaryColor = color === "secondary";
  const isLightColor = color === "light";

  function renderStyle() {
    switch (variant) {
      case "p":
      case "span":
      default:
        return "text-text-primary";
      case "h1":
        return "text-text-primary text-2xl font-bold";
      case "h2":
        return "text-text-primary text-xl font-bold";
      case "h3":
        return "text-text-primary text-lg font-bold";
      case "h4":
        return "text-text-primary text-m";
      case "h5":
        return "text-text-primary text-m";
      case "h6":
        return "text-text-primary text-m";
    }
  }

  return createElement(component, {
    className: cx(
      renderStyle(),
      isSecondaryColor && "text-text-secondary",
      isLightColor && "text-text-light",
      className
    ),
    children: content,
  });
}
