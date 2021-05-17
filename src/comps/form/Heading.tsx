import React from "react";
import { useStyles } from "./styles";
import { ReactComponent as Cancel } from "../../assets/cancel.svg";

interface HeadingProps {
  handleClick: (() => void) | undefined;
}
export const Heading = ({ handleClick }: HeadingProps) => {
  const classes = useStyles();

  return (
    <div className={classes.heading}>
      <h1 className={classes.talk}>Talk to me.</h1>
      <Cancel
        style={{ cursor: "pointer" }}
        className={classes.cancel}
        onClick={handleClick}
      />
    </div>
  );
};
