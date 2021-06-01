import React from "react";
import { useStyles } from "./styles";
import { ProjectProps } from "../../types";

export const Project = ({ title, description, source, link }: ProjectProps) => {
  const classes = useStyles();
  return (
    <div className={classes.project}>
      <h2 className={classes.title}>{title} </h2>
      <p className={classes.description}>{description}</p>

      <a href={link} rel="noopener noreferrer" target="_blank">
        <img
          src={source}
          className={classes.image}
          alt={"boolean not assignable to string"}
        />
      </a>
    </div>
  );
};
