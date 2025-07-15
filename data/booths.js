import { createMapAreaFeature } from "../lib/helpers.js";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Text from "ol/style/Text";
import coordinates from "./coordinates/booths.js";
import { getCurrentTranslationData } from "../lib/language.js";
import colours from "./colours.js";

const langData = getCurrentTranslationData();
const fill = new Fill({ color: colours.art.fill });
const stroke = new Stroke({ color: colours.art.stroke, width: 2 });

//#region Helpers
// TODO: clean this up so style isn't manually being set
const getParentStyle = () => {
  return {
    ...langData.artStands.group,
    areaType: "booth",
    staticStyle: new Style({
      fill,
      stroke,
      text: new Text({
        text: langData.artStands.group.name,
        font: "16px sans-serif",
        fill: new Fill({ color: "#222" }),
        stroke: new Stroke({ color: "#fff", width: 3 }),
        overflow: true,
      }),
    }),
  };
};

const getBoothStyle = (text) => {
  if (!text || !text.name) {
    console.warn("Booth text is missing or invalid:", text);
    text = { name: "Unknown Booth" }; // Fallback text
  }
  return {
    ...text,
    staticStyle: new Style({
      fill,
      stroke,
      text: new Text({
        text: text.name,
        font: "bold 16px sans-serif",
        fill: new Fill({ color: "#222" }),
        stroke: new Stroke({ color: "#fff", width: 3 }),
        overflow: true,
        scale: 0.8,
      }),
    }),
  };
};
//#endregion

//#region North Wall
const northWallAreaFeature = createMapAreaFeature({
  ...getParentStyle(),
  coords: coordinates.artStands.northWall.area,
});
northWallAreaFeature.set("areaType", "parent");

let northWallArtBooths = [];
coordinates.artStands.northWall.booths.forEach((booth, idx) => {
  const text = langData.artStands.northWall.booths[idx];
  // TODO: Instead of mutating the shared boothStaticStyle, create a new Style per booth with the correct text
  const boothFeature = createMapAreaFeature({
    ...getBoothStyle(text),
    coords: booth,
    areaType: "booth",
  });
  boothFeature.set("areaType", "child");
  northWallArtBooths.push(boothFeature);
});
//#endregion
//#region South Wall
let southWallArtBoothAreas = [];
coordinates.artStands.southWall.areas.forEach((area) => {
  const areaFeature = createMapAreaFeature({
    ...getParentStyle(),
    coords: area,
  });
  areaFeature.set("areaType", "parent");
  southWallArtBoothAreas.push(areaFeature);
});

let southWallArtBooths = [];
coordinates.artStands.southWall.booths.forEach((booth, idx) => {
  const text = langData.artStands.southWall.booths[idx];
  const boothFeature = createMapAreaFeature({
    ...getBoothStyle(text),
    coords: booth,
    areaType: "booth",
  });
  boothFeature.set("areaType", "child");
  southWallArtBooths.push(boothFeature);
});
//#endregion
//#region Main Hall
let cosmosArtBoothAreas = [];
coordinates.artStands.cosmos.areas.forEach((area) => {
  const areaFeature = createMapAreaFeature({
    ...getParentStyle(),
    coords: area,
  });
  areaFeature.set("areaType", "parent");
  cosmosArtBoothAreas.push(areaFeature);
});

let cosmosArtBooths = [];
coordinates.artStands.cosmos.booths.forEach((booth, idx) => {
  const text = langData.artStands.cosmo.booths[idx];
  const boothFeature = createMapAreaFeature({
    ...getBoothStyle(text),
    coords: booth,
    areaType: "booth",
  });
  boothFeature.set("areaType", "child");
  cosmosArtBooths.push(boothFeature);
});
//#endregion
//#region Cosmo

let cosmoArtBooths = [];
coordinates.artStands.otherCosmo.forEach((booth, idx) => {
  const text = langData.artStands.otherCosmo[idx];
  // TODO: Instead of mutating the shared boothStaticStyle, create a new Style per booth with the correct text
  const boothFeature = createMapAreaFeature({
    ...getBoothStyle(text),
    coords: booth,
    areaType: "booth",
  });
  //boothFeature.set("areaType", "child");
  cosmoArtBooths.push(boothFeature);
});
//#endregion
//#region Aurora B
let auroraBArtBooths = [];
coordinates.auroraB.forEach((booth, idx) => {
  const text = langData.auroraB[idx];
  // TODO: Instead of mutating the shared boothStaticStyle, create a new Style per booth with the correct text
  const boothFeature = createMapAreaFeature({
    ...getBoothStyle(text),
    coords: booth,
    areaType: "booth",
  });
  //boothFeature.set("areaType", "child");
  auroraBArtBooths.push(boothFeature);
});
//#endregion
//#region Aurora C
let auroraCArtBooths = [];
coordinates.auroraC.forEach((booth, idx) => {
  const text = langData.auroraC[idx];
  // TODO: Instead of mutating the shared boothStaticStyle, create a new Style per booth with the correct text
  const boothFeature = createMapAreaFeature({
    ...getBoothStyle(text),
    coords: booth,
    areaType: "booth",
  });
  //boothFeature.set("areaType", "child");
  auroraCArtBooths.push(boothFeature);
});
//#endregion
export const artStands = [
  northWallAreaFeature,
  ...northWallArtBooths,
  ...southWallArtBoothAreas,
  ...southWallArtBooths,
  ...cosmosArtBoothAreas,
  ...cosmosArtBooths,
  ...cosmoArtBooths,
  ...auroraBArtBooths,
  ...auroraCArtBooths,
];

//#region General Stands
export const generalStands = [
  createMapAreaFeature({
    ...langData.infoStand,
    coords: coordinates.infoStand,
    areaType: "info",
  }),
  createMapAreaFeature({
    ...langData.tickets,
    coords: coordinates.ticketsWest,
    areaType: "tickets",
  }),
  createMapAreaFeature({
    ...langData.selfieHunt,
    coords: coordinates.selfieHunt,
    areaType: "selfie",
  }),
  createMapAreaFeature({
    ...langData.hexcon,
    coords: coordinates.hexcon,
    areaType: "hexcon",
  }),
  createMapAreaFeature({
    ...langData.toruship,
    coords: coordinates.toruship,
    areaType: "toruship",
  }),
  createMapAreaFeature({
    ...langData.medic,
    coords: coordinates.medic,
    areaType: "medic",
  }),
  createMapAreaFeature({
    ...langData.cosplayHelp,
    coords: coordinates.cosplayHelp,
    areaType: "cosplayMedic",
  }),
  createMapAreaFeature({
    ...langData.tickets,
    coords: coordinates.tickets,
    areaType: "tickets",
  }),
  createMapAreaFeature({
    ...langData.infoDesk,
    coords: coordinates.infoDesk,
    areaType: "info",
  }),
];
//#endregion
