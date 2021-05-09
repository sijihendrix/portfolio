import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";

export const Input = ({ placeholder, message }: any) => {
  const classes = useStyles();
  return (
    <input
      type="text"
      id="fname"
      name="fname"
      className={clsx(classes.input, message && classes.message)}
      placeholder={placeholder}
    />
  );
};
