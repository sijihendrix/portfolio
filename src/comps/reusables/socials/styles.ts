import { createUseStyles } from "react-jss";
import { Theme } from "../../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "flex",
    padding: "2% 1%",
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
  "@media (max-width: 540px)": {
    root: {
      paddingLeft: "2.6%",
    },
  },
  "@media (max-width: 411px)": {
    root: {
      paddingLeft: "3%",
    },
  },
}));
