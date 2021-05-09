import React from "react";
import { useStyles } from "./styles";
export const Container = ({ children }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.talk}>Talk to me ...</h1>

      {children}
    </div>
  );
};
