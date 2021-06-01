import React from "react";
import { Nav } from "../../comps/reusables/nav/Nav";
import { Buttons } from "../../comps/home/Buttons";
import { Content } from "../../comps/home/Content";
import { Hero } from "../../comps/home/Hero";
import { HomeProps } from "../../types";

export const Home = ({
  handleModal,
  isOpen,
  checked,
  toggleTheme,
  handleModalClose,
}: HomeProps) => {
  return (
    <>
      <Nav
        isOpen={isOpen}
        toggleTheme={toggleTheme}
        checked={checked}
        onClick={handleModalClose}
      />
      <Hero isOpen={isOpen}>
        <>
          <Content />
          <Buttons handleModal={handleModal} />
        </>
      </Hero>
    </>
  );
};
