import type { AppProps } from "next/app";
import React, { useState } from "react";
import Container, { createTheme, PaletteMode } from "@mui/material";
import ThemeProvider from "../components/ui/ThemeProvider";
import { theme } from "../components/ui/ThemeProvider";
import GlobalStyles from "../components/ui/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("light");
  return (
    <React.Fragment>
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
