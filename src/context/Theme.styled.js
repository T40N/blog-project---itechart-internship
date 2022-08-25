import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#F8F8F8",
    tertiary: "#E8E8E8",
    fontPrim: "#000000",
    fontSec: "#717171",
    iconPrim : "#1C1B1F"
  },
  shadows: {
    shadowLight: "2px 2px 10px rgba(0, 0, 0, 0.12);",
  },
  borderRadius: {
    xs: "15px",
    s: '20px',
    m: "25px",
    l: '40px',
  },

  border: 'solid 5px #E8E8E8',

  borderBottom: 'solid 2px #E8E8E8',

  font: {
    families: {
      primary: `'Poppins', sans-serif`,
      icon: 'Material Icons',
    },
    sizes: {
      xxs: '.75px',
      xs: '.875x',
      s: '1.1rem',
      m: '1.3rem',
      l: '1.5rem',
      xl: '2rem',
    },
  },

};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
