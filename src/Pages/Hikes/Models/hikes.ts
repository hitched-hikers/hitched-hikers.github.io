import { BlogPath } from "../../../Enums/blogPath";
import { HikeName } from "../../../Enums/hikeName";

export interface Hike {
  name: string;
  blogPath: string;
  longitude: number;
  latitude: number;
}

// Canada
export const banffHikes: Hike[] = [
  {
    name: HikeName.CoryPass,
    blogPath: BlogPath.CoryPass,
    latitude: 51.2017,
    longitude: -115.69,
  },
  {
    name: HikeName.SulphurMountain,
    blogPath: BlogPath.SulphurMountain,
    latitude: 51.1236,
    longitude: -115.5556,
  },
  {
    name: HikeName.TunnelMountain,
    blogPath: BlogPath.TunnelMountain,
    latitude: 51.1767,
    longitude: -115.5542,
  },
];
export const gaspeHikes: Hike[] = [
  {
    name: HikeName.MountJacquesCartier,
    blogPath: BlogPath.MountJacquesCartier,
    latitude: 48.9833,
    longitude: -65.95,
  },
  {
    name: HikeName.MountAlbert,
    blogPath: BlogPath.MountAlbert,
    latitude: 48.9214,
    longitude: -66.19495,
  },
];
export const squamishHikes: Hike[] = [
  {
    name: HikeName.MamquamFalls,
    blogPath: BlogPath.MamquamFalls,
    latitude: 49.72120658690391,
    longitude: -123.09158981588705,
  },
  {
    name: HikeName.StawamusChief,
    blogPath: BlogPath.StawamusChief,
    latitude: 49.6867,
    longitude: -123.135,
  },
];

// Italy
export const amalfiHikes: Hike[] = [
  {
    name: HikeName.PathOfTheLemons,
    blogPath: BlogPath.PathOfTheLemons,
    latitude: 40.66231747545338,
    longitude: 14.630269119553638,
  },
  {
    name: HikeName.PathOfTheGods,
    blogPath: BlogPath.PathOfTheGods,
    latitude: 40.625117,
    longitude: 14.534947,
  },
];

// USA
export const adirondackHikes: Hike[] = [
  {
    name: HikeName.MountGiant,
    blogPath: BlogPath.MountGiant,
    latitude: 44.1437,
    longitude: -73.7205,
  },
  {
    name: HikeName.AlgonquinPeak,
    blogPath: BlogPath.AlgonquinPeak,
    latitude: 44.1437,
    longitude: -73.9865,
  },
  {
    name: HikeName.JayMountain,
    blogPath: BlogPath.JayMountain,
    latitude: 44.3125,
    longitude: -73.6857,
  },
];
export const greenMountainHikes: Hike[] = [
  {
    name: HikeName.MountMansfield,
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
