import { createUseStyles } from "react-jss";
import { Theme } from "../../../types";

export interface PropTypes extends Theme {
  theme: boolean;
}

export const useStyles = createUseStyles((theme: Theme) => ({
  button: {
    background: `${theme.colors.backgroundToggle}`,
    border: `2px solid ${theme.colors.toggleBorder}`,
    borderRadius: "30px",
    cursor: "pointer",
    display: "flex",
    fontSize: "0.5rem",
    justifyContent: "space-between",
    margin: "0 auto",
    overflow: "hidden",
    padding: "0.5rem",
    position: "relative",
    width: "8rem",
  },
  svg: {
    height: "auto",
    width: "20rem",
    transition: " all 0.3s linear",
  },
  sun: {
    transform: `
      ${theme.lightTheme ? "translateY(0)" : "translateY(100px)"}`,
  },
  moon: {
    transform: ` ${theme.lightTheme ? "translateY(-100px)" : "translateY(0)"}`,
  },
}));
