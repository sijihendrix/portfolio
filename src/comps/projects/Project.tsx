import React, {
  FunctionComponent,
  JSXElementConstructor,
  ReactElement,
  SVGProps,
} from "react";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

interface ProjectsProps {
  title: string;
  description: string;
  source: string;
  link: string;
}

export const Project = ({
  title,
  description,
  source,
  link,
}: ProjectsProps) => {
  const classes = useStyles();
  return (
    <div className={classes.project}>
      <h2 className={classes.title}>{title} </h2>
      <p className={classes.description}>{description}</p>

      <a href={link} rel="noopener noreferrer" target="_blank">
        <img src={source} className={classes.image} />
      </a>
    </div>
  );
};
