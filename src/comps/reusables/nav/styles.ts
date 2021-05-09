import { createUseStyles } from "react-jss";
import { Theme } from "../../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    background: theme.colors.background,
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "1em ",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: " 0 5px 20px -12px rgb(0 0 0 / 55%)",
  },
  home: {
    color: theme.colors.primary,
    fontSize: "3rem",
  },
  socials: {
    display: "flex",
  },
}));
