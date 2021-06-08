export const darkTheme = {
  lightTheme: false,
  colors: {
    background: "#393E46",
    primary: "#eeeeee",
    secondary: "#aad8d3",
    secondPrimary: "#00adb5",
    inputBcknd: "rgba(0,173,181, 0.1)",
    backgroundToggle: "linear-gradient(#091236, #1E215D)",
    toggleBorder: "#6B8096",
  },
  animation: {
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
  },
};

export const lightTheme = {
  lightTheme: true,
  colors: {
    background: "#f8f5f1",
    primary: "#45526c",
    secondary: "#5aa897",
    secondPrimary: "#f8a488",
    inputBcknd: "#f8f5f1",
    backgroundToggle: "linear-gradient(#39598A, #79D7ED)",
    toggleBorder: "#FFF",
  },
  animation: {
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
  },
};
