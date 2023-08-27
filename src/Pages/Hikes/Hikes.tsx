import {
  Accordion,
  AccordionPanel,
  Box,
  Text,
  PageContent,
  WorldMap,
  Card,
} from "grommet";
import AppHeader from "../../Components/AppHeader";
import styled from "styled-components";
import { useRef, useState } from "react";
import AppPage from "../../Components/AppPage";
import CountryAccordion from "./CountryAccordion";

enum RootIndexes {
  Canada = 0,
  Italy = 1,
  Usa = 2,
}

enum ItalyIndexes {
  Amalfi = 0,
}

enum UsaIndexes {
  Adirondacks = 0,
}

enum CanadaIndexes {
  Banff = 0,
  Gaspe = 1,
}

function Hikes(): JSX.Element {
  const [rootActiveIndex, setRootActiveIndex] = useState<
    number | number[] | undefined
  >(undefined);
  const [italyActiveIndex, setItalyActiveIndex] = useState<
    number | number[] | undefined
  >(undefined);
  const [usaActiveIndex, setUsaActiveIndex] = useState<
    number | number[] | undefined
  >(undefined);
  const [canadaActiveIndex, setCanadaActiveIndex] = useState<
    number | number[] | undefined
  >(undefined);

  const canadaRef = useRef<null | HTMLDivElement>(null);
  const banffRef = useRef<null | HTMLDivElement>(null);
  const gapseRef = useRef<null | HTMLDivElement>(null);
  const italyRef = useRef<null | HTMLDivElement>(null);
  const usaRef = useRef<null | HTMLDivElement>(null);

  const places = [
    {
      name: "Amalfi",
      location: [40.6333, 14.6029],
      color: "graph-4",
      onClick: () => {
        setRootActiveIndex(RootIndexes.Italy);
        setItalyActiveIndex(ItalyIndexes.Amalfi);
        italyRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      name: "Adirondacks",
      location: [44.2795, -73.9799],
      color: "graph-4",
      onClick: () => {
        setRootActiveIndex(RootIndexes.Usa);
        setUsaActiveIndex(UsaIndexes.Adirondacks);
        usaRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      name: "Banff",
      location: [51.4968, -115.9281],
      color: "graph-4",
      onClick: () => {
        setRootActiveIndex(RootIndexes.Canada);
        setCanadaActiveIndex(CanadaIndexes.Banff);
        banffRef.current?.scrollIntoView({ behavior: "smooth" })
      },
    },
    {
      name: "Gaspe",
      location: [48.9468, -66.1234],
      color: "graph-4",
      onClick: () => {
        setRootActiveIndex(RootIndexes.Canada);
        setCanadaActiveIndex(CanadaIndexes.Gaspe);
        gapseRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  return (
    <AppPage>
      <AppHeader title={"Hikes"} />
      <StyledPageContent align="center">
        <StyledMap places={places} color="graph-1" />

        <LocationCard background={{ dark: "dark-2", light: "light-2" }}>
          <RootAccordion
            activeIndex={rootActiveIndex}
            onActive={(active) => setRootActiveIndex(active)}
          >

            <CountryAccordion
              activeIndex={canadaActiveIndex}
              setActiveIndex={(active: number | number[]) => setCanadaActiveIndex(active)}
              country={"🇨🇦 Canada"}
              regions={[{ regionName: "Banff", htmlRef: banffRef, places: [{ hikeName: "Cory Pass" }] }, { regionName: "Gaspe", htmlRef: gapseRef, places: [{ hikeName: "Mount Jacques Cartier" }, { hikeName: "Mount Albert" }] }]}
            />

            <div ref={italyRef}>
              <CountryAccordionPanel label="🇮🇹 Italy">
                <NestedRegionAccordion
                  activeIndex={italyActiveIndex}
                  onActive={(active) => setItalyActiveIndex(active)}
                  background={{ dark: "dark-3", light: "light-3" }}
                >
                  <AccordionPanel label="Amalfi Coast">
                    <StyledHikeNameBox pad="medium">
                      <Text>Path of the Gods</Text>
                    </StyledHikeNameBox>
                    <StyledHikeNameBox pad="medium">
                      <Text>Path of the Lemons</Text>
                    </StyledHikeNameBox>
                  </AccordionPanel>
                </NestedRegionAccordion>
              </CountryAccordionPanel>
            </div>

            <div ref={usaRef}>
              <CountryAccordionPanel
                ref={usaRef}
                label="🇺🇸 United States of America"
              >
                <NestedRegionAccordion
                  activeIndex={usaActiveIndex}
                  onActive={(active) => setUsaActiveIndex(active)}
                  background={{ dark: "dark-3", light: "light-3" }}
                >
                  <AccordionPanel label="Adirondacks">
                    <StyledHikeNameBox pad="medium">
                      <Text>Mount Giant</Text>
                    </StyledHikeNameBox>
                    <StyledHikeNameBox pad="medium">
                      <Text>Algonquin Peak</Text>
                    </StyledHikeNameBox>
                  </AccordionPanel>
                </NestedRegionAccordion>
              </CountryAccordionPanel>
            </div>
          </RootAccordion>
        </LocationCard>
      </StyledPageContent>
    </AppPage>
  );
}

const StyledPageContent = styled(PageContent)`
width: 100%;
max-width: 480px;
`;

const StyledMap = styled(WorldMap)`
  height: fit-content;
  width: 100%;
  padding-top: 24px;
`;

const LocationCard = styled(Card)`
  height: auto;
  width: 100%;
  overflow: visible;
  margin-top: 24px;
  margin-bottom: 24px;
  box-shadow: none;
`;

const RootAccordion = styled(Accordion)`
  width: 100%;
`;

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

export default Hikes;
