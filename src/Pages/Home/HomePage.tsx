import { Clock, PageContent, Text } from "grommet";
import AppHeader from "../../Components/Header/AppHeader";
import AppPage from "../../Components/AppPage";

function HomePage(): JSX.Element {
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

export default HomePage;
