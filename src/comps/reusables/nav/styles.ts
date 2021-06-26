import { createUseStyles } from "react-jss";
import { Theme } from "../../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    background: theme.colors.background,
    margin: "0 auto",
    padding: "1.5% 2%",
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    boxShadow: " 0 5px 20px -12px rgb(0 0 0 / 55%)",
    fontFamily: "'Montserrat', sans-serif",
    position: "fixed",
    left: "50%",
    zIndex: "1",
    transform: "translate( -50%)",
  },

  sij: {
    color: theme.colors.primary,
    fontFamily: "'Viaoda Libre', cursive",
    fontSize: "2.9rem",
    cursor: "pointer",
    letterSpacing: "0.1em",
    textDecoration: "none",
    display: "inline-block",
    textTransform: "uppercase",
    "& :before": {
      opacity: "0",
      transition: " opacity 0.35s, transform 0.35s",
      transform: " scale(0,1)",
    },
    "& :after": {
      opacity: "0",
      borderBottom: "1px solid",
      transition: "opacity 0.35s, -webkit-transform 0.35s",
      transform: " scale(0,1)",
    },

    "& :hover:after": {
      opacity: "1",
      transform: "scale(1)",
    },

    "& :hover": {
      borderBottom: " 1px solid white",
    },
  },

  rest: {
    display: "flex",
    alignItems: "center",
  },
  modalOpen: {
    opacity: "0.1",
  },

  "@media (max-width: 540px)": {
    root: {
      width: "90%",
    },
  },
}));
