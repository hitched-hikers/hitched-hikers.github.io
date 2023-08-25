import { Clock, Page, PageContent, Text } from "grommet";
import AppHeader from "../Components/AppHeader";

function Home(): JSX.Element {
  return (
    <Page height="100vw" background="pageBackground">
      <AppHeader title={"Hitched Hikers"} />
      <PageContent align="center">
        <Text margin="20px" size="large">
          🚧 Under construction... 🚧
        </Text>
        <Clock type="digital" />
      </PageContent>
    </Page>
  );
}

export default Home;
