import React from "react";
import { Toggle, ToggleProps } from "../toggle-switch/Toggle";
import { Socials } from "./Socials";
import { useStyles } from "./styles";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface NavTypes extends ToggleProps {
  isOpen?: boolean;
}

export const Nav = ({ isOpen, checked, toggleTheme }: NavTypes) => {
  const classes = useStyles();

  return (
    <nav className={clsx(classes.root, isOpen && classes.modalOpen)}>
      <Link to="/"  >
      <span className={classes.home} >
        Home
      </span>

      </Link>


      <div className={classes.rest}>
        <Socials />
        <Toggle toggleTheme={toggleTheme} checked={checked} />
      </div>
    </nav>
  );
};
