import React, { useState } from "react";
import { formDataProps, FormProps } from "../../types";
import { CustomButton } from "../reusables/button/CustomButton";
import { Container } from "./Container";
import { TextArea } from "./TextArea";
import { useStyles } from "./styles";
import { data, formDataDefault } from "./data";
import { handleEmailSend } from "../../helpers/emailjs";
import { validateEmail, validateName } from "../../helpers/validators";
import { Input } from "./Input";
import { ErrorMessages } from "./ErrorMessages";
export const Form = ({ handleModal }: FormProps) => {
  const classes = useStyles();

  const [formData, setFormData] = useState<formDataProps>(formDataDefault);
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    validateEmail(formData.reply_to);

    if (!validateName(formData.from_name)) {
      setNameError(true);
    }
    if (!validateEmail(formData.reply_to)) {
      setEmailError(true);
    }
    if (validateName(formData.from_name) && validateEmail(formData.reply_to)) {
      handleEmailSend(formData);
      handleModal();
    }
  }

  const handleChange = (e: React.SyntheticEvent) => {
    const name = (e.target as HTMLTextAreaElement).name;
    const value = (e.target as HTMLTextAreaElement).value;
    setFormData({ ...formData, ...{ [name]: value } });
  };

  const errorMessages = [
    {
      error: nameError,
      msg: "Name must be at least 2 characters",
      kind: "text",
    },

    {
      error: emailError,
      msg: "Please input a valid email",
      kind: "email",
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Container handleModal={handleModal}>
        <>
          <div className={classes.inputFlow}>
            {errorMessages.map(({ error, msg }, index) => {
              return <ErrorMessages msg={msg} error={error} key={index} />;
            })}
          </div>
          <div className={classes.inputFlow}>
            {data.map(({ placeholder, name, errorMsg, type }, index) => {
              return (
                <Input
                  placeholder={placeholder}
                  key={index}
                  handleChange={handleChange}
                  name={name}
                  errorText={errorMsg}
                  type={type}
                />
              );
            })}
          </div>

          <TextArea
            placeholder={"Words for me"}
            cols={79}
            rows={6}
            handleChange={handleChange}
            name={"message"}
          />

          <div className={classes.buttonContainer}>
            <CustomButton children="Message Me" onClick={() => null} />
          </div>
        </>
      </Container>
    </form>
  );
};
