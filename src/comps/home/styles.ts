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
    fontSize: "2.5rem",
    textTransform: "capitalize",
  },
  name: {
    lineHeight: "1.1",
    margin: "0",
    padding: "0.2em 0",
    fontSize: "5rem",
    textTransform: "capitalize",
    textShadow: `-1px 1px 2px ${theme.colors.secondPrimary}, 1px 1px 2px ${theme.colors.secondary},1px -1px 0 ${theme.colors.secondPrimary}, -1px -1px 0 ${theme.colors.secondPrimary}`,
  },
  description: {
    margin: "0",
    padding: "0.1em 0",
    fontSize: "1.8rem",
    fontFamily: "'Montserrat', sans-serif",
  },
  hero: {
    display: "flex",
    justifyContent: " center",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: "100vh",
    maxWidth: "80%",
    margin: "auto ",
    background: theme.colors.background,
  },
  buttons: {
    display: "flex",
    padding: "1em",
    justifyContent: "space-between",
    width: "20%",
    alignItems: "center",
  },
  modalOpen: {
    opacity: "0.1",
  },
  "@media (max-width: 2048px)": {
    buttons: {
      width: "24%",
    },
  },
  "@media (max-width: 1536px)": {
    buttons: {
      width: "30%",
    },
  },

  "@media (max-width: 1280px)": {
    buttons: {
      width: "35%",
    },
  },
  "@media (max-width: 1024px)": {
    root: {
      paddingTop: "0",
    },
    buttons: {
      width: "45%",
    },
    hero: {
      paddingTop: "0",
    },
  },
  "@media (max-width: 768px)": {
    buttons: {
      width: "60%",
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
    hero: {
      maxWidth: "95%",
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
      minHeight: "98vh",
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
    hero: {
      maxWidth: "100%",
    },
    buttons: {
      width: "90%",
    },
  },

  "@media (max-width: 360px)": {
    buttons: {
      width: "93%",
    },
  },
  "@media (max-width: 320px)": {
    buttons: {
      width: "90%",
    },
    root: {
      paddingTop: "10em",
    },
  },
  "@media (max-width: 280px)": {
    root: {
      paddingTop: "10em",
    },
  },
}));
