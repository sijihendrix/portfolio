import React from "react";
import { Container } from "../../comps/projects/Container";
import { Nav } from "../../comps/reusables/nav/Nav";
import { ToggleProps } from "../../comps/reusables/toggle/Toggle";

interface ProjectsProps extends ToggleProps {}

export const Projects = ({ toggleTheme }: ProjectsProps) => {
  return (
    <>
      <Nav toggleTheme={toggleTheme} onClick={() => null} />

      <Container />
    </>
  );
};
