import React from "react";
import { useStyles } from "./styles";

type ErrorMessagesProps = {
  msg: string;
  error: boolean;
};

export const ErrorMessages = ({ msg, error }: ErrorMessagesProps) => {
  const classes = useStyles();

  return <>{error ? <span className={classes.errorMsg}>{msg} </span> : null}</>;
};
