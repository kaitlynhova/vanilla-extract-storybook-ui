import { createTheme } from "@vanilla-extract/css";

const theme = {
  color: {
    primary: "#000000",
  },
};

export const [lightThemeClass, vars] = createTheme(theme);
