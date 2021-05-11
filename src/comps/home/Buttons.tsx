import React from "react";
import { FormProps } from "../../types";
import { CustomButton } from "../reusables/button/CustomButton";
import { useStyles } from "./styles";

export const Buttons = ({ handleModal }: FormProps) => {
  const buttons = [
    { kind: "Projects", inverted: false, onClick: () => null },
    { kind: "Contact Me", inverted: true, onClick: handleModal },
  ];

  const classes = useStyles();
  return (
    <div className={classes.buttons}>
      {buttons.map(({ kind, inverted, onClick }, index) => (
        <CustomButton
          children={kind}
          key={index}
          inverted={inverted}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
