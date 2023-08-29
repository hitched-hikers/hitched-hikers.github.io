import { Button, Header, Text } from "grommet";
import { useAtom } from "jotai";
import styled from "styled-components";
import { darkModeAtom } from "../Utils/Theme";
import { Moon, Sun } from "grommet-icons";

interface HeaderProps {
  title: string;
}

function AppHeader(props: HeaderProps): JSX.Element {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <Header
      background="header"
      justify="center"
      pad={{ left: "medium", right: "small", vertical: "small" }}
    >
      <HeaderText textAlign="center" weight="bold" size="large">
        {props.title}
      </HeaderText>
      <Button
        icon={darkMode ? <Sun /> : <Moon />}
        onClick={() => setDarkMode((darkTheme) => !darkTheme)}
      />
    </Header>
  );
}

const HeaderText = styled(Text)`
  width: 100%;
  padding-left: 48px;
`;

export default AppHeader;
