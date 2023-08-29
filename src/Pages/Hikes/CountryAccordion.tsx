import { Accordion, AccordionPanel, Box, Text } from "grommet";
import styled from "styled-components";
import { Hike } from "./hikes";
import { Link } from "react-router-dom";
import { MutableRefObject } from "react";

interface CountryAccordionProps {
  activeIndex: number | number[] | undefined;
  setActiveIndex: (active: number | number[]) => void;
  country: string;
  regions: HikingRegion[];
}

export interface HikingRegion {
  name: string;
  htmlRef: MutableRefObject<HTMLDivElement | null>;
  hikes: Hike[];
}

function CountryAccordion(props: CountryAccordionProps): JSX.Element {
  return (
    <CountryAccordionPanel label={props.country}>
      <NestedRegionAccordion
        multiple
        activeIndex={props.activeIndex}
        onActive={(active: number | number[]) => props.setActiveIndex(active)}
        background={{ dark: "dark-3", light: "light-3" }}
      >
        {props.regions.map((region) => {
          return (
            <AccordionPanel
              key={region.name}
              ref={region.htmlRef}
              label={region.name}
            >
              {region.hikes.map((hike) => {
                return (
                  <StyledHikeNameBox key={hike.name} pad="medium">
                    <StyledLink to={hike.blogPath}>
                      <Text>{hike.name}</Text>
                    </StyledLink>
                  </StyledHikeNameBox>
                );
              })}
            </AccordionPanel>
          );
        })}
      </NestedRegionAccordion>
    </CountryAccordionPanel>
  );
}

const CountryAccordionPanel = styled(AccordionPanel)`
  padding-left: 8px;
`;

const NestedRegionAccordion = styled(Accordion)`
  padding-left: 24px;
  border-radius: 6px;
`;

const StyledHikeNameBox = styled(Box)`
  padding-left: 24px;

  &:hover {
    opacity: 0.6;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`;

export default CountryAccordion;
