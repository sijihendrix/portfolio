import React from "react";
import { lorem } from "../../helpers/lorem";
import { useStyles } from "./styles";

export const Content = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <h3 className={classes.hi}>hi,</h3>
      <h1 className={classes.name}>Mein Name Ist Siji</h1>
      <p className={classes.description}>{lorem.generateSentences(3)}</p>
    </main>
  );
};
