import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mono100: "#FFFFFF",
    mono200: "#F8F8F8",
    mono300: "#E8E8E8",
    mono400: "#717171",
    mono500: "#000000",
    mono600: "#1C1B1F",
  },
  shadows: {
    shadowLight: "2px 2px 10px rgba(0, 0, 0, 0.12);",
  },
  borderRadius: {
    xs: "15px",
    s: "20px",
    m: "25px",
    l: "40px",
  },

  border: "solid 5px #E8E8E8",

  borderBottom: "solid 2px #E8E8E8",

  font: {
    families: {
      primary: `'Poppins', sans-serif`,
      icon: "Material Icons",
    },
    sizes: {
      xxs: ".75rem",
      xs: ".9rem", //15px
      s: "1.1rem",
      m: "1.3rem", //21px
      l: "1.5rem", //24px
      xl: "2rem",
    },

    weight: {
      s: "300",
      m: "500",
      l: "700",
    },
  },
  breakpoints: {
    small: "512px",

    medium: "1024px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
