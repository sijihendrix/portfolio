import React from "react";
import { Nav } from "../../comps/reusables/nav/Nav";
import { Buttons } from "../../comps/home/Buttons";
import { Content } from "../../comps/home/Content";
import { Hero } from "../../comps/home/Hero";

export const Home = () => {
  return (
    <>
      <Nav />
      <Hero>
        <Content />
        <Buttons />
      </Hero>
    </>
  );
};
