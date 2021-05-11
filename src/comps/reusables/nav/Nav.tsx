import React from "react";
import { Toggle } from "../toggle-switch/Toggle";
import { Socials } from "./Socials";
import { useStyles } from "./styles";
import clsx from "clsx";

type NavTypes = {
  isOpen?: boolean;
};

export const Nav = ({ isOpen }: NavTypes) => {
  const classes = useStyles();

  return (
    <nav className={clsx(classes.root, isOpen && classes.modalOpen)}>
      <a className={classes.home} href="/">
        Home
      </a>
      <Toggle />

      <Socials />
    </nav>
  );
};
