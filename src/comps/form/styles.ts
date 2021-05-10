import { createUseStyles } from "react-jss";
import { Theme } from "../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  input: {
    padding: "12px 20px",
    boxSizing: "border-box",
    border: `2px solid ${theme.colors.background} `,
    borderRadius: "4px",
    transition: "all .25s ease-in-out",
    backgroundColor: theme.colors.secondary,

    fontSize: " 14px",
    lineHeight: "1.6",
    margin: " 15px 0",
  },
  container: {
    maxWidth: "800px",
    background: theme.colors.primary,
    margin: "0 auto",
    alignItems: "center",
    padding: "0.8% 2%",
    // transform: "translateX(0px)"
  },
  talk: {
    color: "black",
    fontSize: "42px",
    fontStyle: "inherit",
    letterSpacing: " -0.008em",
    lineHseight: "1.5",
  },

  inputFlow: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  buttonContainer: {
    padding: "0 5% ",
  },
}));
