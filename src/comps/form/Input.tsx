import React from "react";
import { useStyles } from "./styles";

export const TextArea = ({ placeholder, rows, cols }: any) => {
  const classes = useStyles();
  return (
    <textarea
      id="fname"
      name="fname"
      rows={rows}
      cols={cols}
      className={classes.input}
      placeholder={placeholder}
    />
  );
};
