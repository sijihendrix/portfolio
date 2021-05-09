import React from "react";
import { Toggle } from "../toggle-switch/Toggle";
import { Socials } from "./Socials";
import { useStyles } from "./styles";

export const Nav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <span className={classes.home}>Home</span>
      <Toggle />

      <Socials />
    </nav>
  );
};
