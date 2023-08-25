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

const darkModeAtom = atom<boolean>(false);

export { darkModeAtom, theme };
