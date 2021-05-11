import React, { useState } from "react";
import { formDataProps, FormProps } from "../../types";
import { CustomButton } from "../reusables/button/CustomButton";
import { Container } from "./Container";
import { TextArea } from "./Input";
import { useStyles } from "./styles";
import { data, formDataDefault } from "./data";
import { handleEmailSend } from "../../helpers/emailjs";

export const Form = ({ handleModal }: FormProps) => {
  const classes = useStyles();

  const [formData, setFormData] = useState<formDataProps>(formDataDefault);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const data = formData;
    handleEmailSend(data);
  }

  const handleChange = (e: React.SyntheticEvent) => {
    const name = (e.target as HTMLTextAreaElement).name;
    const value = (e.target as HTMLTextAreaElement).value;
    setFormData({ ...formData, ...{ [name]: value } });
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container handleModal={handleModal}>
        <>
          <div className={classes.inputFlow}>
            {data.map(({ placeholder, col, row, name }, index) => {
              return (
                <TextArea
                  placeholder={placeholder}
                  cols={col}
                  rows={row}
                  key={index}
                  handleChange={handleChange}
                  name={name}
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
