import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => ({
  root: {
    background: "#393E46",
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
