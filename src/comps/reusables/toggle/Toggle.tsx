import React from "react";
import { ReactComponent as MoonIcon } from "../../../assets/night.svg";
import { ReactComponent as SunIcon } from "../../../assets/sun.svg";
import { useStyles } from "./styles";
import clsx from "clsx";
import { ToggleProps } from "../../../types";

export const Toggle = ({ toggleTheme }: ToggleProps) => {
  const classes = useStyles();

  return (
    <button onClick={toggleTheme} className={classes.button}>
      <SunIcon className={clsx(classes.svg, classes.sun)} />
      <MoonIcon className={clsx(classes.svg, classes.moon)} />
    </button>
  );
};
