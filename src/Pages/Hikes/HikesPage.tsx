import { Accordion, PageContent, WorldMap, Card } from "grommet";
import AppHeader from "../../Components/AppHeader";
import styled from "styled-components";
import { MutableRefObject, useRef, useState } from "react";
import AppPage from "../../Components/AppPage";
import CountryAccordion from "./CountryAccordion";
import {
  adirondackHikes,
  amalfiHikes,
  banffHikes,
  gaspeHikes,
  greenMountainHikes,
  squamishHikes,
} from "./hikes";

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
  GreenMountains = 1,
}

enum CanadaIndexes {
  Banff = 0,
  Gaspe = 1,
  Squamish = 2,
}

function HikesPage(): JSX.Element {
  const [rootActiveIndex, setRootActiveIndex] = useState<
    number | number[] | undefined
  >(undefined);

  // Canada content
  const [canadaActiveIndex, setCanadaActiveIndex] = useState<
    number | number[] | undefined
  >(undefined);
  const banffRef = useRef<null | HTMLDivElement>(null);
  const gapseRef = useRef<null | HTMLDivElement>(null);
  const squamishRef = useRef<null | HTMLDivElement>(null);
  const canadaMapRegions = [
    {
      name: "Banff",
      location: [51.4968, -115.9281],
      color: "graph-4",
      onClick: () => {
        setRootActiveIndex(RootIndexes.Canada);
        setCanadaActiveIndex(CanadaIndexes.Banff);
        scrollRefIntoViewDelayed(banffRef);
      },
    },
    {
      name: "Gaspe",
      location: [48.9468, -66.1234],
      color: "graph-4",
      onClick: () => {
        setRootActiveIndex(RootIndexes.Canada);
        setCanadaActiveIndex(CanadaIndexes.Gaspe);
        scrollRefIntoViewDelayed(gapseRef);
      },
    },
    {
      name: "Squamish",
      location: [49.7016, -123.1558],
      color: "graph-4",
      onClick: () => {
        setRootActiveIndex(RootIndexes.Canada);
        setCanadaActiveIndex(CanadaIndexes.Squamish);
        scrollRefIntoViewDelayed(squamishRef);
      },
    },
  ];

  // Italy content
  const [italyActiveIndex, setItalyActiveIndex] = useState<
    number | number[] | undefined
  >(undefined);
  const amalfiRef = useRef<null | HTMLDivElement>(null);
  const italyMapRegions = [
    {
      name: "Amalfi",
      location: [40.6333, 14.6029],
      color: "graph-4",
      onClick: () => {
        setRootActiveIndex(RootIndexes.Italy);
        setItalyActiveIndex(ItalyIndexes.Amalfi);
        scrollRefIntoViewDelayed(amalfiRef);
      },
    },
  ];

  // USA content
  const [usaActiveIndex, setUsaActiveIndex] = useState<
    number | number[] | undefined
  >(undefined);
  const adirondacksRef = useRef<null | HTMLDivElement>(null);
  const greenMountainsRef = useRef<null | HTMLDivElement>(null);
  const usaMapRegions = [
    {
      name: "Adirondacks",
      location: [44.2795, -73.9799],
      color: "graph-4",
      onClick: () => {
        setRootActiveIndex(RootIndexes.Usa);
        setUsaActiveIndex(UsaIndexes.Adirondacks);
        scrollRefIntoViewDelayed(adirondacksRef);
      },
    },
    {
      name: "Green Mountains",
      location: [44.7917, -72.5828],
      color: "graph-4",
      onClick: () => {
        setRootActiveIndex(RootIndexes.Usa);
        setUsaActiveIndex(UsaIndexes.GreenMountains);
        scrollRefIntoViewDelayed(greenMountainsRef);
      },
    },
  ];

  // We need a delay to wait for accordion to open fully and ref to be non-null
  // So we set a timeout before scrolling
  const scrollRefIntoViewDelayed = (
    ref: MutableRefObject<HTMLDivElement | null>
  ) => {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <AppPage>
      <AppHeader title={"Hikes"} />
      <StyledPageContent align="center">
        <StyledMap
          places={[...canadaMapRegions, ...italyMapRegions, ...usaMapRegions]}
          color="graph-1"
        />

        <LocationCard background={{ dark: "dark-2", light: "light-2" }}>
          <RootAccordion
            activeIndex={rootActiveIndex}
            onActive={(active) => {
              setRootActiveIndex(active);

              if (rootActiveIndex === RootIndexes.Canada) {
                banffRef.current?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <CountryAccordion
              activeIndex={canadaActiveIndex}
              setActiveIndex={(active: number | number[]) =>
                setCanadaActiveIndex(active)
              }
              country={"🇨🇦 Canada"}
              regions={[
                {
                  name: "Banff",
                  htmlRef: banffRef,
                  hikes: banffHikes,
                },
                {
                  name: "Gaspe",
                  htmlRef: gapseRef,
                  hikes: gaspeHikes,
                },
                {
                  name: "Squamish",
                  htmlRef: squamishRef,
                  hikes: squamishHikes,
                },
              ]}
            />

            <CountryAccordion
              activeIndex={italyActiveIndex}
              setActiveIndex={(active: number | number[]) =>
                setCanadaActiveIndex(active)
              }
              country={"🇮🇹 Italy"}
              regions={[
                {
                  name: "Amalfi",
                  htmlRef: amalfiRef,
                  hikes: amalfiHikes,
                },
              ]}
            />

            <CountryAccordion
              activeIndex={usaActiveIndex}
              setActiveIndex={(active: number | number[]) =>
                setCanadaActiveIndex(active)
              }
              country={"🇺🇸 United States of America"}
              regions={[
                {
                  name: "Adirondacks",
                  htmlRef: adirondacksRef,
                  hikes: adirondackHikes,
                },
                {
                  name: "Green Mountains",
                  htmlRef: greenMountainsRef,
                  hikes: greenMountainHikes,
                },
              ]}
            />
          </RootAccordion>
        </LocationCard>
      </StyledPageContent>
    </AppPage>
  );
}

const StyledPageContent = styled(PageContent)`
  width: 100%;
  max-width: 640px;
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

export default HikesPage;
