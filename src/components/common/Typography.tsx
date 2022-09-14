import React from "react";

import "./Typography.scss";

export type Weight = "regular" | "bold" | "extra-bold";
export type Size = 12 | 14 | 16 | 22 | 32 | 44;
export type Color = "dark" | "light" | "grey" | "red";
export type Transform = "none" | "capitalize" | "uppercase" | "lowercase";

export type TypographyProps = {
  className?: string;
  weight?: Weight;
  size?: Size;
  color?: Color;
  transform?: Transform;
  children: string;
};

function Typography({
  className = "",
  weight = "regular",
  size = 22,
  color = "dark",
  transform = "none",
  children,
}: TypographyProps): JSX.Element {
  return (
    <div
      className={`typography typography--weight-${weight} typography--size-${size} typography--${color} typography--transform-${transform}
      ${className}`}
    >
      {children}
    </div>
  );
}

export default Typography;
