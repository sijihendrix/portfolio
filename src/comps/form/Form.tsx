import React from "react";
import { CustomButton } from "../reusables/button/CustomButton";
import { Container } from "./Container";
import { TextArea } from "./Input";
import { useStyles } from "./styles";

export const Form = () => {
  const classes = useStyles();
  const data = [
    { placeholder: "Your Name", message: false, col: 31, row: 1 },
    { placeholder: "Your Email", message: false, col: 31, row: 1 },
    { placeholder: "Words for me", message: true, col: 79, row: 6 },
  ];

  return (
    <form>
      <Container>
        <div className={classes.inputFlow}>
          {data.map(({ placeholder, message, col, row }, index) => {
            console.log(row);
            return (
              <TextArea
                placeholder={placeholder}
                message={message}
                cols={col}
                rows={row}
                key={index}
              />
            );
          })}
        </div>
        <div className={classes.buttonContainer}>
          <CustomButton>Message Me</CustomButton>
        </div>
      </Container>
    </form>
  );
};
