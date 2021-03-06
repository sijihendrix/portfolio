import React from "react";

export interface Theme {
  colors: Colors;
  lightTheme: boolean;
}

type Colors = {
  background: string;
  primary: string;
  secondary: string;
  secondPrimary: string;
  inputBcknd: string;
  backgroundToggle: string;
  toggleBorder: string;
};

export interface FormProps {
  handleModal: () => void;
  isOpen?: boolean;
}

export interface HomeProps extends ToggleProps {
  handleModal: () => void;
  isOpen?: boolean;
  handleModalClose: HomeProps["handleModal"];
}

export type ContainerProps = {
  children: JSX.Element;
  handleModal?: FormProps["handleModal"];
};

export interface TextAreaProps {
  placeholder: string;
  rows?: number;
  cols?: number;
  handleChange: (e: React.ChangeEvent) => void;
  name: string;
  type?: string;
}

export interface HeroProps extends ContainerProps {
  isOpen: FormProps["isOpen"];
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  inverted?: boolean;
}

export type formDataProps = {
  from_name: string;
  reply_to: string;
  message: string;
};

export interface ProjectProps {
  title: string;
  description: string;
  source: string;
  link: string;
}

export interface ToggleProps {
  toggleTheme: () => void;
}
