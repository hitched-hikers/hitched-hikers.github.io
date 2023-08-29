import { ThemeType, grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { atom } from "jotai";

const theme: ThemeType = deepMerge(grommet, {
  global: {
    colors: {
      header: "neutral-1",
      pageBackground: {
        dark: "dark-1",
        light: "light-1",
      },
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
  accordion: {
    panel: {
      border: {
        color: "transparent",
      },
    },
    border: {
      color: "transparent",
    },
  },
});

// Get system theme and initialize dark theme atom
let darkMode = false;
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  darkMode = true;
}

const darkModeAtom = atom<boolean>(darkMode);

export { darkModeAtom, theme };
