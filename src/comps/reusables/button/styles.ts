import { createUseStyles } from "react-jss";
import { Theme } from "../../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    minWidth: "165px",
    width: "auto",
    letterSpacing: " 0.5px",
    lineHeight: " 50px",
    padding: "2px 8px",
    fontSize: "1.5rem",
    backgroundColor: theme.colors.secondPrimary,
    color: "white",
    textTransform: "uppercase",
    fontWeight: " bolder",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    transition: "all 1s cubic-bezier(.25, .8, .25, 1)",
    borderRadius: "3px",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "white",
      color: theme.colors.secondPrimary,
      border: "1px solid black",
      boxShadow: "0 3px 6px rgb(0, 173, 181), 0 3px 6px  rgb(170, 216, 211)",
    },
  },
  inverted: {
    backgroundColor: "transparent",
    color: theme.colors.primary,
    border: " 1px solid black",
    "&:hover": {
      backgroundColor: "theme.textColor",
      color: theme.colors.secondPrimary,
      border: "none",
    },
  },
  "@media (max-width: 320px)": {
    root: {
      minWidth: "120px",
    },
  },
}));
