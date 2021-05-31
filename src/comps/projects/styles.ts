import { createUseStyles } from "react-jss";
import { Theme } from "../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  project: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
  },
  title: {
    fontSize: "3rem",
    lineHeight: "1.5",
    margin: "0",
  },
  description: {
    fontSize: "2rem",
    lineHeight: "1.5",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "min(900px, calc(80% +100px))",
    color: theme.colors.primary,
    alignItems: "center",
    padding: "10% 0",
    margin: "0 auto",
    justifyContent: "space-between",
    fontFamily: " 'Roboto', sans-serif",
  },
  projects: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "7% 0 0 0",
  },
  image: {
    margin: "5% 0",
    width: "100%",
    backfaceVisibility: "hidden",
  },
}));
