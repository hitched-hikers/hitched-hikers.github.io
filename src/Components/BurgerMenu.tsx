import { useAtom } from "jotai";
import { stack as Menu } from "react-burger-menu";
import { darkModeAtom } from "../Utils/Theme";
import { Box, Button, Text } from "grommet";
import { Home, Moon, Sun, TreeOption } from "grommet-icons";
import { useEffect, useRef, useState } from "react";
import BurgerMenuItem from "./BurgerMenuItem";

function BurgerMenu(): JSX.Element {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [isOpen, setIsOpen] = useState(false);

  const burgerMenuStyles = useRef({
    bmBurgerBars: {
      background: "#00873D",
    },
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "24px",
      top: "24px",
    },
    bmBurgerBarsHover: {
      background: "#00873D",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#444444",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflow: "hidden",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  });

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      styles={burgerMenuStyles.current}
    >
      <Box>
        <BurgerMenuItem
          path="/"
          onClick={closeMenu}
          text="Home"
          icon={<Home color="#FFFFFF" />}
        />
        <BurgerMenuItem
          path="/hikes"
          onClick={closeMenu}
          text="Hikes"
          icon={<TreeOption color="#FFFFFF" />}
        />
        <Box alignContent="center" direction="row">
          <Button
            icon={darkMode ? <Sun color="#FFFFFF" /> : <Moon color="#FFFFFF" />}
            onClick={() => setDarkMode((darkTheme) => !darkTheme)}
          />
          <Text alignSelf="center">Theme</Text>
        </Box>
      </Box>
    </Menu>
  );
}

export default BurgerMenu;
