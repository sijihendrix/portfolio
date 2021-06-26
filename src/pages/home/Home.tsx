import React from "react";
import { Nav } from "../../comps/reusables/nav/Nav";
import { Buttons } from "../../comps/home/Buttons";
import { Content } from "../../comps/home/Content";
import { Hero } from "../../comps/home/Hero";
import { HomeProps } from "../../types";
import { Socials } from "../../comps/reusables/socials/Socials";

export const Home = ({
  handleModal,
  isOpen,

  toggleTheme,
  handleModalClose,
}: HomeProps) => {
  return (
    <>
      <Nav
        isOpen={isOpen}
        toggleTheme={toggleTheme}
        onClick={handleModalClose}
      />
      <Hero isOpen={isOpen}>
        <>
          <Content />
          <Buttons handleModal={handleModal} />
          {/* <Footer /> */}
          <Socials />
        </>
      </Hero>
    </>
  );
};
