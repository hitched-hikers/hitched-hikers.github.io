import { Accordion, AccordionPanel, Box, Text } from "grommet";
import { MutableRefObject } from "react";
import styled from "styled-components";
import { HikingRegion } from "./places";


interface CountryAccordionProps {
    activeIndex: number | number[] | undefined;
    setActiveIndex: (active: number | number[]) => void;
    country: string;
    regions: HikingRegion[];
}

function CountryAccordion(props: CountryAccordionProps): JSX.Element {
    return (
        <CountryAccordionPanel label={props.country}>
            <NestedRegionAccordion
                activeIndex={props.activeIndex}
                onActive={(active: number | number[]) => props.setActiveIndex(active)}
                background={{ dark: "dark-3", light: "light-3" }}
            >
                {props.regions.map((region) => {
                    return (
                        <AccordionPanel ref={region.htmlRef} label={region.regionName}>
                            {region.places.map((place) => {
                                return (
                                    <StyledHikeNameBox pad="medium">
                                        <Text>{place.hikeName}</Text>
                                    </StyledHikeNameBox>
                                );
                            })}
                        </AccordionPanel>
                    )
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
`;

export default CountryAccordion;