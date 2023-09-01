import { Box, Button, Text } from "grommet";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface BurgerMenuItemProps {
  path: string;
  text: string;
  icon: JSX.Element | undefined;
  onClick: () => void;
}

function BurgerMenuItem(props: BurgerMenuItemProps): JSX.Element {
  return (
    <StyledLink to={props.path}>
      <HoverBox alignContent="center" direction="row">
        <Button onClick={props.onClick} icon={props.icon} />
        <Text alignSelf="center">{props.text}</Text>
      </HoverBox>
    </StyledLink>
  );
}

const HoverBox = styled(Box)`
  &:hover {
    opacity: 0.6;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`;

export default BurgerMenuItem;
