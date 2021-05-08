import { createUseStyles } from "react-jss";
import { Theme } from "../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    minWidth: "165px",
    width: "auto",
    height: "50px",
    letterSpacing: " 0.5px",
    lineHeight: " 50px",
    padding: "0 35px 0 35px",
    fontSize: "15px",
    backgroundColor: "black",
    color: "white",
    textTransform: "uppercase",
    fontWeight: " bolder",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
    },
  },
  inverted: {
    backgroundColor: "white",
    color: "black",
    border: " 1px solid black",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      border: "none",
    },
  },
}));
