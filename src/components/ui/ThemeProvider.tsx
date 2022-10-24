import { createTheme, PaletteMode, ThemeOptions } from "@mui/material";
import {
  PaletteOptions,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { useState } from "react";

export const mui: ThemeOptions = {
  palette: {
    mode: "light",

    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
  },
  shape: {
    borderRadius: 10,
  },
};

export const theme = {
  // base
  white: "#FFFFFF",
  black: "#000000",

  // text
  text1: "#FFFFFF",
  text2: "#111111",
  text3: "#4269e7",

  // backgrounds / greys
  bg1: "#121212",
  bg2: "#FFFFFF",
  bg3: "#ec12f9",

  //primary colors
  primary1: "#ec12f9",
  primary2: "#8d11db",
  primary3: "#00ff29",

  // secondary colors
  secondary1: "#2172E5",
  secondary2: "#2172E5",

  red: "#FF4343",
  green: "#27AE60",
  yellow: "#E3A507",
  blue: "#2172E5",

  error: "#FD4040",
  success: "#27AE60",
  warning: "#FF8F00",

  //shadows
  shadow: "#000",
  borderRadius: "10px",
};

function Instance2(mui: ThemeOptions, theme: any): Theme {
  const [mode, setMode] = useState<PaletteMode>("light");
  var newtheme = theme;
  newtheme.palette.mode = "dark";
  return createTheme(mui, newtheme);
}

const instance = createTheme(mui, theme);
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MuiThemeProvider theme={instance}>{children}</MuiThemeProvider>;
}
