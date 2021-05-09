import React from "react";
import { HomeProps } from "../../pages/home/Home";
import { CustomButton } from "../reusables/button/CustomButton";
import { useStyles } from "./styles";

const buttons = [
  { kind: "Projects", inverted: false },
  { kind: "Contact Me", inverted: true },
];
export const Buttons = ({ handleModal }: HomeProps) => {
  const classes = useStyles();
  return (
    <div className={classes.buttons}>
      {buttons.map(({ kind, inverted }, index) => (
        <CustomButton
          children={kind}
          key={index}
          inverted={inverted}
          handleModal={handleModal}
        />
      ))}
    </div>
  );
};
