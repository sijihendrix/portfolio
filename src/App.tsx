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
  const [isOpen, setModal] = useState(false);

  const handleModalOpen: () => void = () => {
    setModal(true);
  };

  const handleModalClose: () => void = () => {
    setModal(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home handleModal={handleModalOpen} isOpen={isOpen} />
                <ReactModal
                  isOpen={isOpen}
                  style={reactModal}
                  shouldCloseOnEsc={true}
                  onRequestClose={handleModalClose}
                  ariaHideApp={false}
                  closeTimeoutMS={200}
                >
                  <Form handleModal={handleModalClose} />
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
