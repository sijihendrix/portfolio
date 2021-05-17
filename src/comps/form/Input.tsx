import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";
import { TextAreaProps } from "../../types";

export const Input = ({
  name,
  type,
  handleChange,
  placeholder,
}: TextAreaProps) => {
  const classes = useStyles();

  return (
    <input
      type={type}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      className={clsx(classes.textarea, classes.width)}
      required
    />
  );
};
