import React from "react";
import { useStyles } from "./styles";

export const Content = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <h3 className={classes.hi}>hi,</h3>
      <h1 className={classes.name}>My name is Siji</h1>
      <p className={classes.description}>
        I am a software engineer with over three years experience in building
        web and mobile products using Javascript, React, Node.js, Express,
        Graphql, Typescript, Cssinjs, & Mongoose.
      </p>
    </main>
  );
};
