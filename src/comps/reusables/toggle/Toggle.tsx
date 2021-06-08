import React from "react";
import { ReactComponent as MoonIcon } from "../../../assets/night.svg";
import { ReactComponent as SunIcon } from "../../../assets/sun.svg";
import { useStyles } from "./styles";
import clsx from "clsx";
export interface ToggleProps {
  toggleTheme: () => void;
}

export const Toggle = ({ toggleTheme }: ToggleProps) => {
  const classes = useStyles();

  return (
    <button onClick={toggleTheme} className={classes.button}>
      <SunIcon className={clsx(classes.mode, classes.sun)} />
      <MoonIcon className={clsx(classes.mode, classes.moon)} />
    </button>
  );
};
