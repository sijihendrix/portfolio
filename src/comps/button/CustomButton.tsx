import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";
export const CustomButton = ({ children, inverted }: any) => {
  const classes = useStyles();
  return (
    <button className={clsx(classes.root, inverted && classes.inverted)}>
      {children}
    </button>
  );
};
