import { createUseStyles } from "react-jss";
import { Theme } from "../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  textarea: {
    padding: "12px 20px",
    boxSizing: "border-box",
    border: `2px solid ${theme.colors.background} `,
    borderRadius: "4px",
    transition: "all .25s ease-in-out",
    backgroundColor: theme.colors.inputBcknd,
    fontSize: " 14px",
    lineHeight: "1.6",
    margin: " 15px 0",
  },

  container: {
    background: theme.colors.primary,
    margin: "10% auto",
    display: "flex",
    flexDirection: "column",
    padding: "1% 3.5%",
    borderRadius: "30px",
  },
  talk: {
    color: theme.colors.secondPrimary,

    fontSize: "42px",
    fontStyle: "inherit",
    letterSpacing: " -0.008em",
    lineHeight: "1.5",
    margin: "2% 0",
  },

  inputFlow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  buttonContainer: {
    padding: "4.5% 0",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.colors.background,
  },
  width: {
    width: "40%",
  },
  errorMsg: {
    color: "red",
    fontSize: "1.5rem",
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
  cancel: {
    fill: theme.colors.background,
    "&:hover": {
      animation: "$shake  1s 1",
    },
  },
}));
