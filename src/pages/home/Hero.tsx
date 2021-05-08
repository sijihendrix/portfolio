import React from "react";
import { useStyles } from "./styles";

export const Hero = ({ children }: any) => {
  const classes = useStyles();
  return <section className={classes.hero}>{children}</section>;
};
