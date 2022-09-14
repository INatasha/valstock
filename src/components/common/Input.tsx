import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

import "./Input.scss";

import Typography from "./Typography";

type InputProps = {
  className?: string;
  label?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
};

const errorMessage = "There is something wrong!";

function Input({
  className = "",
  label = "",
  value = "",
  type = "text",
  onChange,
  placeholder = "",
  error = false,
}: InputProps): JSX.Element {
  const isActive = value !== "";
  return (
    <div className="input">
      {label && (
        <Typography
          className="input__label"
          weight="extra-bold"
          size={14}
          transform="uppercase"
        >
          {label}
        </Typography>
      )}
      <input
        className={`input__field ${!isActive && "input__field--inactive"} ${
          error && "input__field--error"
        }`}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && (
        <Typography size={12} color="red">
          {errorMessage}
        </Typography>
      )}
    </div>
  );
}

export default Input;
