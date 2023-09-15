import Map, { Source, Layer } from "react-map-gl";
import styled from "styled-components";

import type { SkyLayer } from "react-map-gl";

function ThreeDimensionalMap(): JSX.Element {
  return (
    <MapContainer>
      <Map
        initialViewState={{
          longitude: 0,
          latitude: 40,
          zoom: 0.3,
          bearing: 80,
          pitch: 80,
        }}
        maxPitch={85}
        terrain={{ source: "mapbox-dem", exaggeration: 1.5 }}
        mapboxAccessToken="pk.eyJ1IjoiYWRyaWFuLXBhdHRlcnNvbiIsImEiOiJjbG1qdWx5ZGYwNXg0MmxxaTh2YXZxZzBtIn0.mDcSYptguXymv6LTfToovg"
        style={{ width: "100%", height: 400 }}
        mapStyle={"mapbox://styles/mapbox/satellite-v9"}
      >
        <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />
        <Layer {...skyLayer} />
      </Map>
    </MapContainer>
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

const MapContainer = styled.div`
  padding-top: 24px;
  width: 100%;
`;

export default ThreeDimensionalMap;
