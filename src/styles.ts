import { createUseStyles } from "react-jss";
import { Theme } from "./types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    // backgroundColor: theme.colors.background,
    width: "100%",
  },
}));

export const reactModal = {
  overlay: {
    background: "none",
    transition: "all 500ms ease-in-out",
  },
  content: {
    maxWidth: "800px",
    margin: "0 auto ",
    borderRadius: "12px",
    background: "#eeeeee",
  },
};
