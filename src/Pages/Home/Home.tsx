import { Clock, PageContent, Text } from "grommet";
import AppHeader from "../../Components/AppHeader";
import AppPage from "../../Components/AppPage";

function Home(): JSX.Element {
  return (
    <AppPage>
      <AppHeader title={"Hitched Hikers"} />
      <PageContent align="center">
        <Text margin="20px" size="large">
          🚧 Under construction... 🚧
        </Text>
        <Clock type="digital" />
      </PageContent>
    </AppPage>
  );
}

export default Home;
