import { createMapAreaFeature } from "../lib/helpers.js";
import coordinates from "./coordinates/rooms.js";
import { getCurrentTranslationData } from "../lib/language.js";
const langData = getCurrentTranslationData();
export const rooms = [
  createMapAreaFeature({
    ...langData.vega,
    coords: coordinates.vega,
    areaType: "stage",
  }),
  createMapAreaFeature({
    ...langData.sirius,
    coords: coordinates.sirius,
    areaType: "clear",
  }),
  createMapAreaFeature({
    ...langData.coolRoom,
    coords: coordinates.polaris,
    areaType: "stage",
  }),
  createMapAreaFeature({
    ...langData.toilet,
    coords: coordinates.toilets,
    areaType: "clear",
  }),
  createMapAreaFeature({
    ...langData.arcade,
    coords: coordinates.arcade,
    areaType: "stage",
  }),
  createMapAreaFeature({
    ...langData.stage,
    coords: coordinates.cosmo,
    areaType: "stage",
  }),
  // createMapAreaFeature({
  //   name: "Cosmos C",
  //   coords: coordinates.otherCosmo,
  //   popup: `Another area for events and activities!`,
  //   areaType: "clear",
  // }),
  // createMapAreaFeature({
  //   name: "Aurora B",
  //   coords: coordinates.auroraB,
  //   areaType: "clear",
  // }),
  // createMapAreaFeature({
  //   name: "Aurora C",
  //   coords: coordinates.auroraC,
  //   areaType: "clear",
  // }),
  createMapAreaFeature({
    ...langData.lectureRoom1,
    coords: coordinates.cosmo1,
    areaType: "stage",
  }),
  createMapAreaFeature({
    ...langData.lectureRoom2,
    coords: coordinates.cosmo2,
    areaType: "stage",
  }),
];
