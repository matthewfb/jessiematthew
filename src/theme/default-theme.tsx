"use client";

import { PaletteOptions, ThemeOptions } from "@mui/material";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

export const customColor = {
  yellowText: "#ffc000",
  background: "#212c40",
};

export const palette: PaletteOptions = {
  background: {
    default: "#212c40",
    paper: "#212c40",
  },
};

export const theme = extendTheme({
  typography: {
    fontFamily: `"Elsie", sans-serif`,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    fontWeightLight: 300,
    h1: {
      fontSize: 80,
      fontWeight: 600,
      lineHeight: "normal",
      fontFamily: "Elsie",
    },
    h2: {
      fontSize: 60,
      fontWeight: 600,
      lineHeight: "normal",
      fontFamily: "Elsie",
      "@media (max-width: 1439px)": {
        fontSize: 40,
      },
    },
    h3: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: "normal",
      fontFamily: "Elsie",
      "@media (max-width: 1439px)": {
        fontSize: 32,
      },
    },
    h4: {
      fontSize: 34,
      fontWeight: 600,
      lineHeight: "normal",
      fontFamily: "Elsie",
      "@media (max-width: 1439px)": {
        fontSize: 26,
      },
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "normal",
      fontFamily: "Elsie",
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "normal",
      fontFamily: "Elsie",
      "@media (max-width: 1439px)": {
        fontSize: 16,
      },
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "normal",
      fontFamily: "Elsie",
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "normal",
      fontFamily: "Elsie",
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: "normal",
      fontFamily: "Elsie",
    },
  },
  colorSchemes: {
    light: {
      palette,
    },
    dark: {
      palette,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "var(--lighter-text)",
        },
      },
    },
  },
});
