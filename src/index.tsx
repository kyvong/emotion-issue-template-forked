import { ThemeProvider, Theme } from "@emotion/react";
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

const theme:Theme = {
  titleColor: "green",
  headerColor: "orange",
};

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
