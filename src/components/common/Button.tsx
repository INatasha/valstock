import React, { MouseEvent } from "react";

import "./Button.scss";

import Typography, { Color, TypographyProps } from "./Typography";

type ButtonVariant =
  | "contained-dark"
  | "contained-light"
  | "outlined-dark"
  | "outlined-light";

type ButtonProps = {
  className?: string;
  label: TypographyProps["children"];
  variant?: ButtonVariant;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const labelColorsByVariant: Record<ButtonVariant, Color> = {
  "contained-dark": "light",
  "contained-light": "dark",
  "outlined-dark": "light",
  "outlined-light": "dark",
};

function Button({
  className = "",
  label,
  variant = "contained-dark",
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`button button--${variant} ${className}`}
      onClick={onClick}
    >
      <Typography
        className="button__label"
        weight="extra-bold"
        size={14}
        color={labelColorsByVariant[variant]}
        transform="uppercase"
      >
        {label}
      </Typography>
    </button>
  );
}

export default Button;
