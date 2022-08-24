import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mono100: "#FFFFFF",
    mono200: "#F8F8F8",
    mono300: "#E8E8E8",
    mono400: "#717171",
    mono500: "#000000",
  },
  shadows: {
    shadowLight: "2px 2px 10px rgba(0, 0, 0, 0.12);",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
