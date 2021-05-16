import React from "react";
import { useStyles } from "./styles";

export const ErrorMessages = ({ msg, error }: any) => {
  const classes = useStyles();

  return <>{error ? <span className={classes.errorMsg}>{msg} </span> : null}</>;
};
