import { MutableRefObject } from "react";

export interface HikingRegion {
  regionName: string;
  htmlRef: MutableRefObject<HTMLDivElement | null>;
  places: Hike[];
}

export interface Hike {
  hikeName: string;
}

export const banffHikes: Hike[] = [{ hikeName: "Cory Pass" }];
export const gaspeHikes: Hike[] = [
  { hikeName: "Mount Jacques Cartier" },
  { hikeName: "Mount Albert" },
];

export const amalfiHikes: Hike[] = [
  { hikeName: "Path of the Lemons" },
  { hikeName: "Path of the Gods" },
];

export const adirondackHikes: Hike[] = [
  { hikeName: "Mount Giant" },
  { hikeName: "Algonquin Peak" },
];
export const greenMountainHikes: Hike[] = [{ hikeName: "Mount Mansfield" }];
