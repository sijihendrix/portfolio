import React, { useState } from "react";
import { ThemeProvider } from "react-jss";
import { theme } from "./theme";
import { reactModal, useStyles } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Form } from "./comps/form/Form";
import ReactModal from "react-modal";

function App() {
  const classes = useStyles();
  const [isOpen, setModal] = useState(true);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
                <ReactModal isOpen={isOpen} style={reactModal}>
                  <Form />
                </ReactModal>
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
