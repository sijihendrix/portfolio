import { createUseStyles } from "react-jss";
import { Theme } from "../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
  project: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    padding: "5% 0",
  },
  title: {
    fontSize: "2.3rem",
    lineHeight: "1.2",
    margin: "0",
    textTransform: "uppercase",
    fontWeight: "500",
    letterSpacing: "0.2rem",
  },
  description: {
    fontSize: "1.5rem",
    lineHeight: "1.5",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    // maxWidth: "min(1100px, calc(80% +100px))",
    maxWidth: "80%",
    color: theme.colors.primary,
    alignItems: "center",
    padding: "10% 0% 5%",
    margin: "0 auto",
    justifyContent: "space-between",
    fontFamily: " 'Roboto', sans-serif",
  },
  projects: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "4% 0 0 0",
  },
  image: {
    margin: "5% 0",
    width: "100%",
    backfaceVisibility: "hidden",
    transition: "transform 1.5s ease-out",
    "&:hover": {
      transform: "scale(1.1)",
      zIndex: "0",
    },
  },
  "@media (max-width: 1024px)": {
    projects: {
      flexDirection: "column",
    },
    project: {
      width: "auto",
    },
    container: {
      padding: "12% 0% 5%",
    },
  },
  "@media (max-width: 540px)": {
    container: {
      padding: "15% 0% 5%",
    },
  },

  "@media (max-width: 414px)": {
    container: {
      padding: "23% 0% 5%",
    },
    projects: {
      padding: "15% 0 0 0",
    },
  },
}));
