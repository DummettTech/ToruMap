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

// TODO: clean this up so style isn't manually being set
const parentStaticStyle = new Style({
  fill,
  stroke,
  text: new Text({
    text: "Art Stands",
    font: "bold 18px sans-serif",
    fill: new Fill({ color: "#222" }),
    stroke: new Stroke({ color: "#fff", width: 3 }),
    overflow: true,
  }),
});

// For the parent area
const northWallAreaFeature = createMapAreaFeature({
  name: "Art Stands",
  coords: coordinates.artStands.northWall.area,
  popup: `Art Stands<br>
  Zoom in to view more!`,
  areaType: "booth",
  staticStyle: parentStaticStyle,
});
northWallAreaFeature.set("areaType", "parent");

const getBoothStyle = (text) => {
  return {
    ...text,
    staticStyle: new Style({
      fill,
      stroke,
      text: new Text({
        text: text.name,
        font: "bold 18px sans-serif",
        fill: new Fill({ color: "#222" }),
        stroke: new Stroke({ color: "#fff", width: 3 }),
        overflow: true,
      }),
    }),
  };
};

let northWallArtBooths = [];
coordinates.artStands.northWall.booths.forEach((booth, idx) => {
  const text = langData.artStands.northWall.booths[idx];
  // Instead of mutating the shared boothStaticStyle, create a new Style per booth with the correct text
  const boothFeature = createMapAreaFeature({
    ...getBoothStyle(text),
    coords: booth,
    areaType: "booth",
  });
  boothFeature.set("areaType", "child");
  northWallArtBooths.push(boothFeature);
});

let southWallArtBoothAreas = [];
coordinates.artStands.southWall.areas.forEach((area) => {
  const areaFeature = createMapAreaFeature({
    name: "Art Stands",
    coords: area,
    popup: `Art Stands<br>
  Zoom in to view more!`,
    areaType: "booth",
    staticStyle: parentStaticStyle,
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

let cosmosArtBoothAreas = [];
coordinates.artStands.cosmos.areas.forEach((area) => {
  const areaFeature = createMapAreaFeature({
    name: "Art Stands",
    coords: area,
    popup: `Art Stands<br>
  Zoom in to view more!`,
    areaType: "booth",
    staticStyle: parentStaticStyle,
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

export const artStands = [
  northWallAreaFeature,
  ...northWallArtBooths,
  ...southWallArtBoothAreas,
  ...southWallArtBooths,
  ...cosmosArtBoothAreas,
  ...cosmosArtBooths,
];

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
];
