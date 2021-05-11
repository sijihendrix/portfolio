import React from "react";
import { ContainerProps } from "../../types";
import { useStyles } from "./styles";

export const Container = ({ children }: ContainerProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.talk}>Talk to me.</h1>

      {children}
    </div>
  );
};
