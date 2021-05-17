import { createUseStyles } from "react-jss";
import { Theme } from "../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    width: "50%",
    padding: "1em",
    color: theme.colors.primary,
    display: "flex",
    flexDirection: "column",
    fontFamily: " 'Roboto', sans-serif",
  },
  hi: {
    margin: "0",
    padding: "0.1em 0",
    fontSize: "3rem",
    textTransform: "capitalize",
  },
  name: {
    lineHeight: "1.1",
    margin: "0",
    padding: "0.2em 0",
    fontSize: "8rem",
    textTransform: "capitalize",
    textShadow:
      "-1px 1px 2px #00adb5, 1px 1px 2px #aad8d3,1px -1px 0 #00adb5, -1px -1px 0 #00adb5",
  },
  description: {
    margin: "0",
    padding: "0.1em 0",
    fontSize: "2.5rem",
    fontFamily: "'Montserrat', sans-serif",
  },
  hero: {
    display: "flex",
    justifyContent: " center",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: "91vh",
    maxWidth: "1100px",
    margin: "auto ",
  },
  buttons: {
    display: "flex",
    padding: "1em",
    paddingTop: "3em",
    justifyContent: "space-between",
    width: "32%",
    alignItems: "center",
  },
  modalOpen: {
    opacity: "0.1",
  },
  "@media (max-width: 1024px)": {
    buttons: {
      width: "34%",
    },
  },
  "@media (max-width: 768px)": {
    buttons: {
      width: "50%",
    },
  },

  "@media (max-width: 540px)": {
    root: {
      width: "90%",
      padding: "2em",
    },
    buttons: {
      width: "70%",
      padding: "2em",
    },
  },
  "@media (max-width: 504px)": {
    root: {
      width: "auto",
      padding: "2em",
    },
    buttons: {
      width: "90%",
      padding: "2em",
    },
    hero: {
      minHeight: "91vh",
      padding: "2% 0",
    },
  },

  "@media (max-width: 411px)": {
    buttons: {
      width: "85%",
      padding: "2em",
    },
  },

  "@media (max-width: 375px)": {
    buttons: {
      width: "90%",
    },
  },

  "@media (max-width: 360px)": {
    buttons: {
      width: "95%",
    },
  },
  "@media (max-width: 320px)": {
    buttons: {
      width: "90%",
    },
  },
}));
