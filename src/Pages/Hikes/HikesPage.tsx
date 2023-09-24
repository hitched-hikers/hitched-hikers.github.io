import { Accordion, PageContent, Card } from "grommet";
import styled from "styled-components";
import AppPage from "../../Components/AppPage";
import Map, { Source, ViewStateChangeEvent } from "react-map-gl";
import CountryAccordion from "./CountryAccordion";
import MapboxAccessToken from "../../Utils/MapboxAccessToken.txt";
import {
  adirondackHikes,
  allHikes,
  amalfiHikes,
  banffHikes,
  gaspeHikes,
  greenMountainHikes,
  squamishHikes,
} from "./Models/hikes";
import MapMarker from "./Map/MapMarker";
import { useState } from "react";

function HikesPage(): JSX.Element {
  const [isMarkerFixed, setIsMarkerFixed] = useState(false);
  const [mapboxAcessToken, setMapboxAccessToken] = useState<string | undefined>(
    undefined
  );

  fetch(MapboxAccessToken)
    .then((response) => response.text())
    .then((text) => setMapboxAccessToken(text));

  const handleMapZoomEnd = (event: ViewStateChangeEvent) =>
    event.viewState.zoom > 8 ? setIsMarkerFixed(true) : setIsMarkerFixed(false);

  return (
    <AppPage>
      <StyledPageContent align="center">
        <MapContainer>
          {mapboxAcessToken ? (
            <Map
              initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 1,
              }}
              terrain={{ source: "mapbox-dem", exaggeration: 1.5 }}
              mapboxAccessToken={mapboxAcessToken}
              style={{ width: "100%", height: 480 }}
              mapStyle="mapbox://styles/mapbox/outdoors-v12"
              onZoomEnd={handleMapZoomEnd}
            >
              <Source
                id="mapbox-dem"
                type="raster-dem"
                url="mapbox://mapbox.mapbox-terrain-dem-v1"
                tileSize={512}
                maxzoom={14}
              />
              {allHikes.map((hike) => (
                <MapMarker
                  blogPath={hike.blogPath}
                  markerName={hike.name}
                  latitude={hike.latitude}
                  longitude={hike.longitude}
                  open={isMarkerFixed}
                />
              ))}
            </Map>
          ) : (
            <MapSkeleton />
          )}
        </MapContainer>

        <LocationCard background={{ dark: "dark-2", light: "light-2" }}>
          <RootAccordion>
            <CountryAccordion
              country={"🇨🇦 Canada"}
              regions={[
                {
                  name: "Banff",
                  hikes: banffHikes,
                },
                {
                  name: "Gaspe",
                  hikes: gaspeHikes,
                },
                {
                  name: "Squamish",
                  hikes: squamishHikes,
                },
              ]}
            />

            <CountryAccordion
              country={"🇮🇹 Italy"}
              regions={[
                {
                  name: "Amalfi",
                  hikes: amalfiHikes,
                },
              ]}
            />

            <CountryAccordion
              country={"🇺🇸 United States of America"}
              regions={[
                {
                  name: "Adirondacks",
                  hikes: adirondackHikes,
                },
                {
                  name: "Green Mountains",
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

const MapContainer = styled.div`
  width: 100%;
`;

const MapSkeleton = styled(Card)`
  height: 480px;
  width: 100%;
  border-radius: 8px;
`;

const StyledPageContent = styled(PageContent)`
  width: 100%;
  max-width: 1024px;
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
