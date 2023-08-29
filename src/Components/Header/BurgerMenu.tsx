import { useAtom } from "jotai";
import { stack as Menu } from "react-burger-menu";
import { darkModeAtom } from "../../Utils/Theme";

function BurgerMenu(): JSX.Element {
  const darkMode = useAtom(darkModeAtom);

  const burgerMenuStyles = {
    bmBurgerButton: {
      position: "fixed",
      width: "24px",
      height: "20px",
      left: "16px",
      top: "12px",
    },
    bmBurgerBars: {
      background: darkMode ? "#000000" : "#FFFFFF",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
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
      left: "0",
      top: "48px",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      width: "100%",
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
      top: "48px",
      left: "0px",
    },
  };

  return (
    <Menu
      outerContainerId="outer"
      pageWrapId="page-wrap"
      styles={burgerMenuStyles}
    />
  );
}

export default BurgerMenu;
