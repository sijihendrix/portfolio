import React from "react";

export interface Theme {
  colors: Colors;
}

type Colors = {
  background: string;
  primary: string;
  secondary: string;
  white: string;
  secondPrimary: string;
};

export interface FormProps {
  handleModal: () => void;
  isOpen?: boolean;
}

export type ContainerProps = {
  children: JSX.Element;
  handleModal?: FormProps["handleModal"];
};

export interface TextAreaProps {
  placeholder: string;
  rows: number;
  cols: number;
  handleChange: (e: React.ChangeEvent) => void;
  name: string;
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
