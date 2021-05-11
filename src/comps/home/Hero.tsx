import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";
import { HeroProps } from "../../types";

export const Hero = ({ children, isOpen }: HeroProps) => {
  const classes = useStyles();
  return (
    <section className={clsx(classes.hero, isOpen && classes.modalOpen)}>
      {children}
    </section>
  );
};
