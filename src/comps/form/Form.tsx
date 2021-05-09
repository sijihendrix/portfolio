import React from "react";
import { CustomButton } from "../reusables/button/CustomButton";
import { Container } from "./Container";
import { Input } from "./Input";
import { useStyles } from "./styles";

export const Form = () => {
  const classes = useStyles();
  const data = [
    { placeholder: "Your Name", message: false },
    { placeholder: "Your Email", message: false },
    { placeholder: "Words for me", message: true },
  ];

  return (
    <form>
      <Container>
        <div className={classes.inputFlow}>
          {data.map(({ placeholder, message }) => (
            <Input placeholder={placeholder} message={message} />
          ))}
        </div>
        <div className={classes.buttonContainer}>
          <CustomButton>Call me Maybe</CustomButton>
        </div>
      </Container>
    </form>
  );
};
