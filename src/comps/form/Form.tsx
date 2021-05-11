import React from "react";
import { FormProps } from "../../types";
import { CustomButton } from "../reusables/button/CustomButton";
import { Container } from "./Container";
import { TextArea } from "./Input";
import { useStyles } from "./styles";

export const Form = ({ handleModal }: FormProps) => {
  const classes = useStyles();
  const data = [
    { placeholder: "Your Name", message: false, col: 31, row: 1 },
    { placeholder: "Your Email", message: false, col: 31, row: 1 },
    { placeholder: "Words for me", message: true, col: 79, row: 6 },
  ];

  return (
    <form>
      <Container handleModal={handleModal}>
        <>
          <div className={classes.inputFlow}>
            {data.map(({ placeholder, col, row }, index) => {
              return (
                <TextArea
                  placeholder={placeholder}
                  cols={col}
                  rows={row}
                  key={index}
                />
              );
            })}
          </div>
          <div className={classes.buttonContainer}>
            <CustomButton children="Message Me" onClick={() => null} />
          </div>
        </>
      </Container>
    </form>
  );
};
