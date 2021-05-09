import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => ({
  input: {
    width: "40%",
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "2px solid red",
    borderRadius: "4px",
    transition: "all .25s ease-in-out",
    backgroundColor: "rgba(38,169,234,.5)",
    height: "60px",
    fontSize: " 14px",
    lineHeight: "1.6",
    margin: " 15px 0",
  },
  container: {
    maxWidth: "800px",
    background: "white",
    margin: "0 auto",
    alignItems: "center",
    padding: "1% 2%",
  },
  talk: {
    color: "black",
    fontSize: "42px",
    fontStyle: "inherit",
    letterSpacing: " -0.008em",
    lineHseight: "1.5",
  },
  message: {
    height: "150px",
    width: "90%",
  },
  inputFlow: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  buttonContainer: {
    padding: "0 5% ",
  },
}));
