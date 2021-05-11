import React from "react";
import { TextAreaProps } from "../../types";
import { useStyles } from "./styles";

export const TextArea = ({
  placeholder,
  rows,
  cols,
  handleChange,
  name,
}: TextAreaProps) => {
  const classes = useStyles();
  return (
    <textarea
      id="fname"
      name={name}
      rows={rows}
      cols={cols}
      className={classes.input}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
