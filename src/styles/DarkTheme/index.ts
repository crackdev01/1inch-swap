import { createTheme } from "@mui/material/styles";

const themeColors = {
  colors: {
    primary00: '#101010',
    primary10: '#141822',
    primary20: '#7185AA',
    primary30: '#1D2A43',

    secondary00: '#E5E54B',

    white: '#ffffff',
    black: '#000000'
  },
};

const themeFonts = {
  fonts: {
    mainFont: "Circular Std",
  },

  fontWeights: {
    semibold: 900,
    regular: 700,
    light: 400,
  },
};

export const darkTheme = createTheme({
  ...themeColors,
  ...themeFonts,
  palette: {
    mode: "dark",
  }
});
