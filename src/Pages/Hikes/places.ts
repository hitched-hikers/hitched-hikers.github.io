import { MutableRefObject } from "react";

export interface HikingRegion {
    regionName: string;
    htmlRef: MutableRefObject<HTMLDivElement | null>;
    places: Hike[];
}

export interface Hike {
    hikeName: string;
}