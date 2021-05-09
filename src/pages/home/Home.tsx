import React from "react";
import { Nav } from "../../comps/reusables/nav/Nav";
import { Buttons } from "../../comps/home/Buttons";
import { Content } from "../../comps/home/Content";
import { Hero } from "../../comps/home/Hero";
export interface HomeProps {
  handleModal: () => void;
}

export const Home = ({ handleModal }: HomeProps) => {
  return (
    <>
      <Nav />
      <Hero>
        <Content />
        <Buttons handleModal={handleModal} />
      </Hero>
    </>
  );
};
