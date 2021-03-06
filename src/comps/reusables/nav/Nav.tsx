import React from "react";
import { Toggle } from "../toggle/Toggle";
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
  const sij = `<Sij/>`;

  return (
    <nav
      className={clsx(classes.root, isOpen && classes.modalOpen)}
      onClick={onClick}
    >
      <Link to="/">
        <span className={classes.sij}> {sij}</span>
      </Link>

      <div className={classes.rest}>
        <Toggle toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};
