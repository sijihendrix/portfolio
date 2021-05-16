import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";

export const Input = ({ name, type, handleChange, placeholder }: any) => {
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
