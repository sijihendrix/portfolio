import React from "react";
import { Toggle } from "../toggle-switch/Toggle";
import { Socials } from "./Socials";
import { useStyles } from "./styles";

export const Nav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <a className={classes.home} href="/">
        Home
      </a>
      <Toggle />

      <Socials />
    </nav>
  );
};
