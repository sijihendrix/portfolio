import React, { useState } from "react";

import { ThemeProvider } from "react-jss";
import { theme } from "./theme";
import clsx from "clsx";
import { useStyles } from "./styles";

function App() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}></div>
      </ThemeProvider>
    </>
  );
}

export default App;
