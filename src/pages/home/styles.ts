import { createUseStyles } from "react-jss";
import { Theme } from "../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    width: "50%",
    padding: "1em",
    color: theme.colors.primary,
    display: "flex",
    flexDirection: "column",
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
    textShadow:
      "-1px 1px 2px #00adb5, 1px 1px 2px #aad8d3,1px -1px 0 #00adb5, -1px -1px 0 #00adb5",
  },
  description: {
    margin: "0",
    padding: "0.1em 0",
    fontSize: "2.5rem",
  },
  hero: {
    display: "flex",
    justifyContent: " center",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: "100vh",
    maxWidth: "1100px",
    margin: "auto ",
    // paddingTop: "150px",
  },
  buttons: {
    display: "flex",
    padding: "1em",
    justifyContent: "space-between",
    width: "32%",
    alignItems: "center",
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
  },
}));
