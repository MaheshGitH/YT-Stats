import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const colors = {
  light: "#F5F3F4",
  dark: "#161A1D",
  primary: "#E5383B",
  secondary: "#786868",
  custBlack: "#0B090A",
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === "dark" ? "dark" : "light",
      color: props.colorMode === "dark" ? "whiteAlpha.900" : "blackAlpha.900",
    },
  }),
};

const fonts = {
  heading: "'Roboto', sans-serif",
  body: "'Roboto', sans-serif",
};

const theme = extendTheme({
  config,
  colors,
  styles,
  fonts,
});

export default theme;
