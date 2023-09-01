import { Page } from "grommet";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";

interface AppPageProps {
  children: React.ReactNode;
}

function AppPage(props: AppPageProps): JSX.Element {
  return (
    <>
      <BurgerMenu />
      <FullScreenPage background="pageBackground">
        {props.children}
      </FullScreenPage>
    </>
  );
}

const FullScreenPage = styled(Page)`
  min-height: 100vh;
  padding-top: 48px;
  padding-bottom: 24px;
`;

export default AppPage;
