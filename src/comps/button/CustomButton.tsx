import React from "react";
import { useStyles } from "./styles";
export const CustomButton = ({ children, inverted }: any) => {
  const classes = useStyles();
  return <button className={classes.root}>{children}</button>;
};
