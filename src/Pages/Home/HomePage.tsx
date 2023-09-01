import { Clock, PageContent, Text } from "grommet";
import AppPage from "../../Components/AppPage";

function HomePage(): JSX.Element {
  return (
    <AppPage>
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
