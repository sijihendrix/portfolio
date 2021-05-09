import React from "react";
import { CustomButton } from "../button/CustomButton";
import { useStyles } from "./styles";

const buttons = [
  { kind: "Projects", inverted: false },
  { kind: "Contact Me", inverted: true },
];
export const Buttons = () => {
  const classes = useStyles();
  return (
    <div className={classes.buttons}>
      {buttons.map(({ kind, inverted }, index) => (
        <CustomButton children={kind} key={index} inverted={inverted} />
      ))}
    </div>
  );
};
