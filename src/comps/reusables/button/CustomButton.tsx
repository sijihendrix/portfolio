import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";
import { ButtonProps } from "../../../types";

export const CustomButton = ({ children, inverted, onClick }: ButtonProps) => {
  const classes = useStyles();
  return (
    <button
      className={clsx(classes.root, inverted && classes.inverted)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
