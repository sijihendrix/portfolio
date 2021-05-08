import { createUseStyles } from "react-jss";
import { Theme } from "./types";

export const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.background,
    // background: "#393E46",
    width: "100%",
  },
}));
