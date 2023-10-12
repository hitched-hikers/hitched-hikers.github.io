import { BlogPath } from "../../../Enums/blogPath";
import { HikeName } from "../../../Enums/hikeName";

export interface Hike {
  name: string;
  date: Date;
  blogPath: string;
  longitude: number;
  latitude: number;
  distance: number;
  elevationGain: number;
}

// Canada
export const banffHikes: Hike[] = [
  {
    name: HikeName.CoryPass,
    blogPath: BlogPath.CoryPass,
    date: new Date(),
    latitude: 51.2017,
    longitude: -115.69,
    distance: 0,
    elevationGain: 0,
  },
  {
    name: HikeName.SulphurMountain,
    blogPath: BlogPath.SulphurMountain,
    date: new Date(),
    latitude: 51.1236,
    longitude: -115.5556,
    distance: 0,
    elevationGain: 0,
  },
  {
    name: HikeName.TunnelMountain,
    blogPath: BlogPath.TunnelMountain,
    date: new Date(),
    latitude: 51.1767,
    longitude: -115.5542,
    distance: 0,
    elevationGain: 0,
  },
];
export const gaspeHikes: Hike[] = [
  {
    name: HikeName.MountJacquesCartier,
    blogPath: BlogPath.MountJacquesCartier,
    date: new Date(),
    latitude: 48.9833,
    longitude: -65.95,
    distance: 0,
    elevationGain: 0,
  },
  {
    name: HikeName.MountAlbert,
    blogPath: BlogPath.MountAlbert,
    date: new Date(),
    latitude: 48.9214,
    longitude: -66.19495,
    distance: 0,
    elevationGain: 0,
  },
];
export const squamishHikes: Hike[] = [
  {
    name: HikeName.MamquamFalls,
    blogPath: BlogPath.MamquamFalls,
    date: new Date(),
    latitude: 49.72120658690391,
    longitude: -123.09158981588705,
    distance: 0,
    elevationGain: 0,
  },
  {
    name: HikeName.StawamusChief,
    blogPath: BlogPath.StawamusChief,
    date: new Date(),
    latitude: 49.6867,
    longitude: -123.135,
    distance: 0,
    elevationGain: 0,
  },
];

// Italy
export const amalfiHikes: Hike[] = [
  {
    name: HikeName.PathOfLemons,
    blogPath: BlogPath.PathOfTheLemons,
    date: new Date(2023, 5, 5),
    latitude: 40.66231747545338,
    longitude: 14.630269119553638,
    distance: 0,
    elevationGain: 0,
  },
  {
    name: HikeName.PathOfTheGods,
    blogPath: BlogPath.PathOfTheGods,
    date: new Date(2023, 5, 6),
    latitude: 40.625117,
    longitude: 14.534947,
    distance: 5.8,
    elevationGain: 1167,
  },
];

// USA
export const adirondackHikes: Hike[] = [
  {
    name: HikeName.MountGiant,
    blogPath: BlogPath.MountGiant,
    date: new Date(),
    latitude: 44.1437,
    longitude: -73.7205,
    distance: 0,
    elevationGain: 0,
  },
  {
    name: HikeName.AlgonquinPeak,
    blogPath: BlogPath.AlgonquinPeak,
    date: new Date(2023, 8, 19),
    latitude: 44.1437,
    longitude: -73.9865,
    distance: 16.32,
    elevationGain: 3632,
  },
  {
    name: HikeName.JayMountain,
    blogPath: BlogPath.JayMountain,
    date: new Date(),
    latitude: 44.3125,
    longitude: -73.6857,
    distance: 0,
    elevationGain: 0,
  },
];
export const greenMountainHikes: Hike[] = [
  {
    name: HikeName.MountMansfield,
    blogPath: BlogPath.MountMansfield,
    date: new Date(),
    latitude: 44.5437,
    longitude: -72.8143,
    distance: 0,
    elevationGain: 0,
  },
];

export const allHikes = banffHikes
  .concat(gaspeHikes)
  .concat(squamishHikes)
  .concat(amalfiHikes)
  .concat(adirondackHikes)
  .concat(greenMountainHikes);
