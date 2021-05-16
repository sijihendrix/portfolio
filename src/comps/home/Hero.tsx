import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";
import { HeroProps } from "../../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Hero = ({ children, isOpen }: HeroProps) => {
  const classes = useStyles();
  return (
    <section className={clsx(classes.hero, isOpen && classes.modalOpen)}>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </section>
  );
};
