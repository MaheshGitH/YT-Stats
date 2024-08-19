import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.ts";
import { Global, css } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Roboto";
        src: url("/assets/fonts/Roboto-Regular.woff2") format("woff2");
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto";
        src: url("/assets/fonts/Roboto-Medium.woff2") format("woff2");
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: "Roboto";
        src: url("/assets/fonts/Roboto-Bold.woff2") format("woff2");
        font-weight: 700;
        font-style: normal;
      }
    `}
  />
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>
);
