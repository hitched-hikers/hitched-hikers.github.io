import { Marker } from "react-map-gl";
import MapPin from "./MapPin.png";
import styled from "styled-components";
import { useCallback, useMemo, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./MapMarker.css";
import { useNavigate } from "react-router-dom";

interface MapMarkerProps {
  blogPath: string;
  markerName: string;
  latitude: number;
  longitude: number;
}

function MapMarker(props: MapMarkerProps): JSX.Element {
  const markerRef = useRef<mapboxgl.Marker>(null);
  const navigate = useNavigate();

  const popup = useMemo(() => {
    return new mapboxgl.Popup({
      anchor: "bottom",
      closeButton: false,
      offset: 16,
      className: "marker-text",
    }).setText(props.markerName);
  }, [props.markerName]);

  const togglePopup = useCallback(() => {
    markerRef.current?.togglePopup();
  }, []);

  return (
    <>
      <Marker
        ref={markerRef}
        onClick={() => navigate(props.blogPath)}
        longitude={props.longitude}
        latitude={props.latitude}
        popup={popup}
      >
        <StyledMapPin
          onMouseEnter={togglePopup}
          onMouseLeave={togglePopup}
          alt="Map Pin"
          src={MapPin}
        />
      </Marker>
    </>
  );
}

const StyledMapPin = styled.img`
  cursor: pointer;
  width: 16px;
`;

export default MapMarker;
