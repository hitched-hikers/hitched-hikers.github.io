import { Box, Text } from "grommet";
import styled from "styled-components";

interface CountryAccordionTitleProps {
  country: string;
  countryFlag: React.ReactNode;
}

function CountryAccordionTitle(props: CountryAccordionTitleProps): JSX.Element {
  return (
    <Box direction="row" align="center">
      <CountryFlagContainer>{props.countryFlag}</CountryFlagContainer>
      <CountryTitleText>{props.country}</CountryTitleText>
    </Box>
  );
}

const CountryFlagContainer = styled.div`
  width: 30px;
  height: 20px;
  margin-left: 8px;
`;

const CountryTitleText = styled(Text)`
  margin-left: 8px;
`;

export default CountryAccordionTitle;
