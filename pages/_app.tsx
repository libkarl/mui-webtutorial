import type { AppProps } from "next/app";
import React from "react";
import Container from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
