import { BlogPath } from "../BlogPages/BlogPath";

export interface Hike {
  name: string;
  blogPath: string;
  longitude: number;
  latitude: number;
}

// Canada
export const banffHikes: Hike[] = [
  {
    name: "Cory Pass",
    blogPath: BlogPath.CoryPass,
    latitude: 51.2017,
    longitude: -115.69,
  },
  {
    name: "Sulphur Mountain",
    blogPath: BlogPath.SulphurMountain,
    latitude: 51.1236,
    longitude: -115.5556,
  },
  {
    name: "Tunnel Mountain",
    blogPath: BlogPath.TunnelMountain,
    latitude: 51.1767,
    longitude: -115.5542,
  },
];
export const gaspeHikes: Hike[] = [
  {
    name: "Mount Jacques Cartier",
    blogPath: BlogPath.MountJacquesCartier,
    latitude: 48.9833,
    longitude: -65.95,
  },
  {
    name: "Mount Albert",
    blogPath: BlogPath.MountAlbert,
    latitude: 48.9214,
    longitude: -66.19495,
  },
];
export const squamishHikes: Hike[] = [
  {
    name: "Mamquam Falls",
    blogPath: BlogPath.MamquamFalls,
    latitude: 49.72120658690391,
    longitude: -123.09158981588705,
  },
  {
    name: "Stawamus Chief",
    blogPath: BlogPath.StawamusChief,
    latitude: 49.6867,
    longitude: -123.135,
  },
];

// Italy
export const amalfiHikes: Hike[] = [
  {
    name: "Path of the Lemons",
    blogPath: BlogPath.PathOfTheLemons,
    latitude: 40.66231747545338,
    longitude: 14.630269119553638,
  },
  {
    name: "Path of the Gods",
    blogPath: BlogPath.PathOfTheGods,
    latitude: 40.625117,
    longitude: 14.534947,
  },
];

// USA
export const adirondackHikes: Hike[] = [
  {
    name: "Mount Giant",
    blogPath: BlogPath.MountGiant,
    latitude: 44.1437,
    longitude: -73.7205,
  },
  {
    name: "Algonquin Peak",
    blogPath: BlogPath.AlgonquinPeak,
    latitude: 44.1613,
    longitude: -73.9865,
  },
  {
    name: "Jay Mountain",
    blogPath: BlogPath.JayMountain,
    latitude: 44.3125,
    longitude: -73.6857,
  },
];
export const greenMountainHikes: Hike[] = [
  {
    name: "Mount Mansfield",
    blogPath: BlogPath.MountMansfield,
    latitude: 44.5437,
    longitude: -72.8143,
  },
];

export const allHikes = banffHikes
  .concat(gaspeHikes)
  .concat(squamishHikes)
  .concat(amalfiHikes)
  .concat(adirondackHikes)
  .concat(greenMountainHikes);
