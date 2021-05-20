import React from "react";
import { Nav } from "../../comps/reusables/nav/Nav";
import { ToggleProps } from "../../comps/reusables/toggle-switch/Toggle";

interface ProjectsProps extends ToggleProps {}

export const Projects = ({ toggleTheme, checked }: ProjectsProps) => {
  return (
    <>
      <Nav toggleTheme={toggleTheme} checked={checked} />
    </>
  );
};
