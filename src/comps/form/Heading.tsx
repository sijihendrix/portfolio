import React from "react";
import { useStyles } from "./styles";
import { ReactComponent as Cancel } from "../../assets/cancel.svg";

interface HeadingProps {
  onClick: (() => void) | undefined;
}
export const Heading = ({ onClick }: HeadingProps) => {
  const classes = useStyles();

  return (
    <div className={classes.heading}>
      <h1 className={classes.talk}>Talk to me.</h1>
      <Cancel style={{ cursor: "pointer" }} onClick={onClick} />
    </div>
  );
};
