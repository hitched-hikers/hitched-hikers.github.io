import { Box, Button, Header } from "grommet";
import { Home, Moon, Sun, TreeOption } from "grommet-icons";
import { useAtom } from "jotai";
import { Link, useLocation } from "react-router-dom";
import { darkModeAtom } from "../Utils/Theme";
import { styled } from "styled-components";
import { Path } from "../Enums/path";

function PageHeader(): JSX.Element {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const location = useLocation();

  return (
    <Header
      style={{ paddingTop: "16px" }}
      sticky={"scrollup"}
      background={{ dark: "dark-1", light: "light-1" }}
    >
      <Box direction="row" justify="between">
        <StyledLink to={Path.Home}>
          <Button
            icon={<Home />}
            label="Home"
            primary={location.pathname === Path.Home}
            hoverIndicator
          />
        </StyledLink>
        <StyledLink to={Path.Hikes}>
          <Button
            icon={<TreeOption />}
            label="Hikes"
            primary={location.pathname === Path.Hikes}
            hoverIndicator
          />
        </StyledLink>
      </Box>
      <Button
        style={{ paddingRight: "16px" }}
        icon={darkMode ? <Sun color="#FFFFFF" /> : <Moon color="#000000" />}
        onClick={() => setDarkMode((darkTheme) => !darkTheme)}
      />
    </Header>
  );
}

const StyledLink = styled(Link)`
  padding-left: 16px;
`;

export default PageHeader;
