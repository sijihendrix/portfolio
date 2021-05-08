import React from "react";
import { Nav } from "../../comps/nav/Nav";
import { Buttons } from "./Buttons";
import { Content } from "./Content";
import { Hero } from "./Hero";

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
