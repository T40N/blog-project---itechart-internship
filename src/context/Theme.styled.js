import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    MONO100: "#FFFFFF",
    MONO200: "#F8F8F8",
    MONO300: "#E8E8E8",
    MONO400: "#717171",
    MONO500: "#000000",
    MONO600 : "#1C1B1F"
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
      xxs: '.75rem',
      xs: '.875rem',
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
