import { Button, Clock, grommet, Grommet, Header, HeaderExtendedProps, Page, PageContent, Text } from 'grommet';
import { Moon, Sun } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';
import { useState } from 'react';
import styled from 'styled-components'

const theme = deepMerge(grommet, {
  global: {
    colors: {
      header: "neutral-1",
      pageBackground: {
        dark: "dark-1",
        light: "light-1"
      }
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
});

const HeaderText = styled(Text)`
  width: 100%;
  padding-left: 48px;
`;

const AppBar = (props: HeaderExtendedProps) => (
  <Header
    background="header"
    justify='center'
    pad={{ left: "medium", right: "small", vertical: "small" }}
    {...props}
  />
);

function HomePage() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <Grommet theme={theme} full themeMode={darkTheme ? "dark" : "light"}>
      <Page height="100%" background="pageBackground">
        <AppBar>
          <HeaderText textAlign='center' weight="bold" size="large">Hitched Hikers</HeaderText>
          <Button
            icon={darkTheme ? <Sun /> : <Moon />}
            onClick={() => setDarkTheme((darkTheme) => !darkTheme)}
          />
        </AppBar>
        <PageContent align='center'>
          <Text margin="20px" size="large">🚧 Under construction... 🚧</Text>
          <Clock type="digital" />
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default HomePage;
