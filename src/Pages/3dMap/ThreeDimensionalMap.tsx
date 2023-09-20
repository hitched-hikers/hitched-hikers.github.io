import Map, { Source, Layer } from "react-map-gl";

import type { SkyLayer } from "react-map-gl";
import AppPage from "../../Components/AppPage";
import { useSearchParams } from "react-router-dom";
import MapMarker from "../Hikes/Map/MapMarker";

function ThreeDimensionalMap(): JSX.Element {
  const [searchParams] = useSearchParams();
  const longitudeQueryParam = searchParams.get("longitude");
  const latitudeQueryParam = searchParams.get("latitude");
  const nameQueryParam = searchParams.get("name");

  let longitude = 0;
  let latitude = 0;
  let name = "";

  if (
    longitudeQueryParam != null &&
    latitudeQueryParam != null &&
    nameQueryParam != null
  ) {
    longitude = Number(longitudeQueryParam);
    latitude = Number(latitudeQueryParam);
    name = nameQueryParam;
  }

  return (
    <AppPage>
      <Map
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 13,
          bearing: 80,
          pitch: 80,
        }}
        maxPitch={85}
        terrain={{ source: "mapbox-dem", exaggeration: 1.5 }}
        mapboxAccessToken="pk.eyJ1IjoiYWRyaWFuLXBhdHRlcnNvbiIsImEiOiJjbG1sMW45OWIwNnJlMmxwbjFhOWQwNXFiIn0.xnUy4HAJnRiU9qd7oQl0PA"
        style={{ width: "100%", height: "100vh" }}
        mapStyle={"mapbox://styles/mapbox/satellite-v9"}
      >
        <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />
        <MapMarker
          fixed
          closeButton
          markerName={name}
          latitude={latitude}
          longitude={longitude}
        />
        <Layer {...skyLayer} />
      </Map>
    </AppPage>
  );
}
const skyLayer: SkyLayer = {
  id: "sky",
  type: "sky",
  paint: {
    "sky-type": "atmosphere",
    "sky-atmosphere-sun": [0.0, 0.0],
    "sky-atmosphere-sun-intensity": 15,
  },
};

export default ThreeDimensionalMap;
