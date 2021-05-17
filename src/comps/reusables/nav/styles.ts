import { createUseStyles } from "react-jss";
import { Theme } from "../../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    background: theme.colors.background,
    // maxWidth: "1100px",
    margin: "0 auto",
    padding: "1% 2.5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: " 0 5px 20px -12px rgb(0 0 0 / 55%)",
    fontFamily: "'Montserrat', sans-serif",
  },
  home: {
    color: theme.colors.primary,
    fontSize: "3rem",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
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
  socials: {
    display: "flex",
  },
  modalOpen: {
    opacity: "0.1",
  },
  "@keyframes shake": {
    "25%": {
      transform: "rotate(15deg)",
    },
    " 50%": {
      transform: "rotate(-30deg)",
    },
    "75% ": {
      transform: "rotate(5deg)",
    },
    "100%": {
      transform: "rotate(0deg)",
    },
  },
  link: {
    "&:hover": {
      animation: "$shake  1s 1",
    },
  },
}));
