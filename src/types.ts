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
  handleModal?: () => void;
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
}

export interface HeroProps extends ContainerProps {
  isOpen: FormProps["isOpen"];
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  inverted?: boolean;
}
