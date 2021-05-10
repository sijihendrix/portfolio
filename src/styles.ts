import { createUseStyles } from "react-jss";
import { Theme } from "./types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    background: "#393E46",
    width: "100%",
  },
}));

export const reactModal = {
  overlay: { background: "transperent" },
  content: {
    maxWidth: "800px",
    margin: "auto ",
    height: "60vh",
    borderRadius: "12px",
    background: "#eeeeee",
    // transition: "margin-right 4s",
  },
};
