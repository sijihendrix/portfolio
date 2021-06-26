import React from "react";
import { useStyles } from "./styles";
import { ReactComponent as GitHub } from "../../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../../assets/linkedin.svg";

export const Socials = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a
        href="https://www.linkedin.com/in/oluwasijibomi-bamgboye/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className={classes.link} />
      </a>
      <a
        href="https://github.com/sijihendrix"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub className={classes.link} />
      </a>
    </div>
  );
};
