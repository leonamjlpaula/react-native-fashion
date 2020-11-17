import { createTheme, createText, createBox } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
    grey: "#F4F0EF",
    background: "white",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontFamily: "SFProDisplay-Bold",
      fontSize: 80,
      lineHeight: 80,
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 28,
      color: "secondary",
    },
    title2: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 24,
      lineHeight: 30,
      color: "secondary",
    },
    body: {
      fontFamily: "SFProDisplay-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    button: {
      fontFamily: "SFProDisplay-Medium",
      fontSize: 15,
      color: "text",
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
