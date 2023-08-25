import { Page } from "grommet";
import styled from "styled-components";

interface AppPageProps {
  children: React.ReactNode;
}

function AppPage(props: AppPageProps): JSX.Element {
  return (
    <FullScreenPage background="pageBackground">
      {props.children}
    </FullScreenPage>
  );
}

const FullScreenPage = styled(Page)`
  min-height: 100vh;
`;

export default AppPage;
