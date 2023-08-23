import { Button, Clock, grommet, Grommet, Header, HeaderExtendedProps, Page, PageContent, Text } from 'grommet';
import { Moon, Sun } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';
import { useState } from 'react';

const theme = deepMerge(grommet, {
  global: {
    colors: {
      header: "neutral-4",
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

const AppBar = (props: HeaderExtendedProps) => (
  <Header
    background="header"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    {...props}
  />
);

function HomePage() {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <Grommet theme={theme} full themeMode={darkTheme ? "dark" : "light"}>
      <Page height="100%" background="pageBackground">
        <AppBar>
          <Text weight="bold" size="large">Hitched Hikers</Text>
          <Button
            icon={darkTheme ? <Moon /> : <Sun />}
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
