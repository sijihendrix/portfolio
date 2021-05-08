import React from "react";
import { lorem } from "../../helpers/lorem";

export const Content = () => {
  return (
    <main>
      <h3>hi</h3>
      <h1>Mein Name Ist Siji</h1>
      <p>{lorem.generateSentences(3)}</p>
    </main>
  );
};
