import React from "react";

import { Toggle } from "../toggle/Toggle";

import { Socials } from "./Socials";
import { useStyles } from "./styles";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ToggleProps } from "../../../types";

interface NavTypes extends ToggleProps {
  isOpen?: boolean;
  onClick: () => void;
}

export const Nav = ({ isOpen, toggleTheme, onClick }: NavTypes) => {
  const classes = useStyles();

  return (
    <nav
      className={clsx(classes.root, isOpen && classes.modalOpen)}
      onClick={onClick}
    >
      <Link to="/">
        <span className={classes.home}>Sij</span>
      </Link>

      <div className={classes.rest}>
        <Socials />

        <Toggle toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};
