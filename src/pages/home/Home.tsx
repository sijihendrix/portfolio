import React from "react";
import { Nav } from "../../comps/reusables/nav/Nav";
import { Buttons } from "../../comps/home/Buttons";
import { Content } from "../../comps/home/Content";
import { Hero } from "../../comps/home/Hero";
import { FormProps } from "../../types";

export const Home = ({ handleModal, isOpen }: FormProps) => {
  return (
    <>
      <Nav isOpen={isOpen} />
      <Hero isOpen={isOpen}>
        <>
          <Content />
          <Buttons handleModal={handleModal} />
        </>
      </Hero>
    </>
  );
};
