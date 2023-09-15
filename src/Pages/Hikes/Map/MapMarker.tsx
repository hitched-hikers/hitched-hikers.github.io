import { Marker } from "react-map-gl";
import MapPin from "./MapPin.png";
import styled from "styled-components";
import { useCallback, useEffect, useMemo, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./MapMarker.css";
import { useNavigate } from "react-router-dom";

interface MapMarkerProps {
  blogPath?: string;
  closeButton?: boolean;
  fixed?: boolean;
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
      closeButton: props.closeButton,
      offset: 16,
      className: "marker-text",
    }).setText(props.markerName);
  }, [props.closeButton, props.markerName]);

  useEffect(() => {
    if (props.fixed) {
      markerRef.current?.togglePopup();
    }
  }, [props.fixed]);

  const togglePopup = useCallback(() => {
    markerRef.current?.togglePopup();
  }, []);

  return (
    <>
      <Marker
        ref={markerRef}
        onClick={() => props.blogPath && navigate(props.blogPath)}
        longitude={props.longitude}
        latitude={props.latitude}
        popup={popup}
      >
        <StyledMapPin
          onMouseEnter={() => !props.fixed && togglePopup()}
          onMouseLeave={() => !props.fixed && togglePopup()}
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
