import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  inverted?: boolean;
  onClick: () => void;
}
export const CustomButton = ({ children, inverted, onClick }: ButtonProps) => {
  console.log(inverted);

  const classes = useStyles();
  return (
    <button
      className={clsx(classes.root, inverted && classes.inverted)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
