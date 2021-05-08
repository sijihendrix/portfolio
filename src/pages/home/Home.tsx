import React from "react";
import { Buttons } from "./Buttons";
import { Content } from "./Content";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <>
      <Hero>
        <Content />
        <Buttons />
      </Hero>
    </>
  );
};
