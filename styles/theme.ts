import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    customColor: "#ce5f5f",
  },
  shape: {
    borderRadius: 10,
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    customColor: string;
  }
  interface PaletteOptions {
    customColor: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    customColor: true;
  }
}
