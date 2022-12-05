// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { colors, fonts, fontSizes } from "./config";

// DarkMode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Global Styles
const styles = {
  global: {
    p: {
      fontSize: "md",
      lineHeight: "1.4",
      color: "inherit",
    },
  },
};

//  Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  fonts,
  colors,
  fontSizes,
  styles,
  config,
});

export default theme;
