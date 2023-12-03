import { Marker } from "react-map-gl";
import MapPin from "./MapPin.png";
import styled from "styled-components";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./MapMarker.css";
import { useNavigate } from "react-router-dom";

interface MapMarkerProps {
  blogPath?: string;
  closeButton?: boolean;
  open?: boolean;
  markerName: string;
  latitude: number;
  longitude: number;
}

function MapMarker(props: MapMarkerProps): JSX.Element {
  const markerRef = useRef<mapboxgl.Marker>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const popup = useMemo(() => {
    return new mapboxgl.Popup({
      anchor: "bottom",
      closeButton: props.closeButton,
      offset: 16,
      className: "marker-text",
    }).setText(props.markerName);
  }, [props.closeButton, props.markerName]);

  const togglePopup = useCallback(() => {
    markerRef.current?.togglePopup();
  }, []);

  useEffect(() => {
    if (props.open === true && isPopupOpen === false) {
      togglePopup();
      setIsPopupOpen(true);
    } else if (props.open === false && isPopupOpen === true) {
      togglePopup();
      setIsPopupOpen(false);
    }
  }, [isPopupOpen, props.open, togglePopup]);

  return (
    <Marker
      ref={markerRef}
      onClick={() => props.blogPath && navigate(props.blogPath)}
      longitude={props.longitude}
      latitude={props.latitude}
      popup={popup}
    >
      <StyledMapPin
        onMouseEnter={() => !props.open && togglePopup()}
        onMouseLeave={() => !props.open && togglePopup()}
        alt="Map Pin"
        src={MapPin}
      />
    </Marker>
  );
}

const StyledMapPin = styled.img`
  cursor: pointer;
  width: 16px;
`;

export default MapMarker;
