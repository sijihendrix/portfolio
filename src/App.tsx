import React, { useState } from "react";
import { ThemeProvider } from "react-jss";
import { darkTheme, lightTheme } from "./theme";
import { reactModal } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Form } from "./comps/form/Form";
import ReactModal from "react-modal";
import { Projects } from "./pages/projects/Projects";

function App() {
  const [isOpen, setModal] = useState(false);
  const [checked, setCheck] = useState(true);
  const [bckgnd, setBckgnd] = useState("#393E46");

  const handleModalOpen: () => void = () => {
    setModal(true);
  };

  const handleModalClose: () => void = () => {
    setModal(false);
  };

  const [theme, setTheme] = useState("dark");

  const toggleTheme = (isChecked: boolean) => {
    setCheck(isChecked);
    if (checked === false) {
      setTheme("dark");
      setBckgnd("#393E46");
    } else {
      setTheme("light");
      setBckgnd("#f8f5f1");
    }
  };

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <div style={{ background: bckgnd }}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home
                  handleModal={handleModalOpen}
                  isOpen={isOpen}
                  toggleTheme={toggleTheme}
                  checked={checked}
                  handleModalClose={handleModalClose}
                />
                <ReactModal
                  isOpen={isOpen}
                  style={reactModal}
                  className="Modal"
                  shouldCloseOnEsc={true}
                  onRequestClose={handleModalClose}
                  ariaHideApp={false}
                  closeTimeoutMS={500}
                >
                  <Form handleModal={handleModalClose} />
                </ReactModal>
              </Route>

              <Route path="/projects">
                <Projects toggleTheme={toggleTheme} checked={checked} />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
