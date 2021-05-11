import React from "react";
import { ContainerProps } from "../../types";
import { Heading } from "./Heading";
import { useStyles } from "./styles";

export const Container = ({ children, handleModal }: ContainerProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Heading onClick={handleModal} />
      {children}
    </div>
  );
};
