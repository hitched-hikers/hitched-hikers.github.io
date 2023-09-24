import { Button, Header, Page } from "grommet";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import MediaQuery from "react-responsive";
import { Home } from "grommet-icons";
import { Link } from "react-router-dom";

interface AppPageProps {
  children: React.ReactNode;
}

function AppPage(props: AppPageProps): JSX.Element {
  return (
    <>
      <MediaQuery query="(max-device-width: 1024px)">
        <BurgerMenu />
        <FullScreenPageMobile background="pageBackground">
          {props.children}
        </FullScreenPageMobile>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 1024px)">
        <Header background="brand">
          <Link to="/">
            <Button icon={<Home />} hoverIndicator />
          </Link>
          <Link to="/hikes">
            <Button label="Hikes" secondary hoverIndicator />
          </Link>
        </Header>
        <FullScreenPageDesktop background="pageBackground">
          {props.children}
        </FullScreenPageDesktop>
      </MediaQuery>
    </>
  );
}

const FullScreenPageMobile = styled(Page)`
  min-height: 100vh;
  padding-top: 72px;
  padding-bottom: 24px;
`;

const FullScreenPageDesktop = styled(Page)`
  min-height: 100vh;
  padding-top: 32px;
`;

export default AppPage;
