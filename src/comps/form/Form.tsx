import React, { useState } from "react";
import { formDataProps, FormProps } from "../../types";
import { CustomButton } from "../reusables/button/CustomButton";
import { Container } from "./Container";
import { TextArea } from "./Input";
import { useStyles } from "./styles";
import * as emailjs from "emailjs-com";
import { data, formDataDefault } from "./data";

export const Form = ({ handleModal }: FormProps) => {
  const classes = useStyles();

  const [formData, setFormData] = useState<formDataProps>(formDataDefault);

  const SERVICE_ID = "service_91iskxk";
  const TEMPLATE_ID = "template_qbbmeha";
  const USER_ID = "user_rUDjcygOPlpS5espn9ZLE";

  function handleClick(e: React.SyntheticEvent) {
    e.preventDefault();

    const data = formData;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        console.log(response.status, response.text);
      },
      function (err) {
        console.log(err);
      }
    );
  }

  const handleChange = (e: React.SyntheticEvent) => {
    const name = (e.target as HTMLTextAreaElement).name;
    const value = (e.target as HTMLTextAreaElement).value;
    setFormData({ ...formData, ...{ [name]: value } });
    console.log(formData);
  };

  return (
    <form onSubmit={handleClick}>
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
