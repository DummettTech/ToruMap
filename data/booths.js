import { createMapAreaFeature } from "../lib/helpers.js";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Text from "ol/style/Text";
import coordinates from "./coordinates/booths.js";
import { getCurrentTranslationData } from "../lib/language.js";

const langData = getCurrentTranslationData();

// TODO: clean this up so style isn't manually being set
const parentStaticStyle = new Style({
  fill: new Fill({ color: "rgba(0,128,0,0.2)" }),
  stroke: new Stroke({ color: "green", width: 2 }),
  text: new Text({
    text: "Art Stands",
    font: "bold 18px sans-serif",
    fill: new Fill({ color: "#222" }),
    stroke: new Stroke({ color: "#fff", width: 3 }),
    overflow: true,
  }),
});

const boothStaticStyle = new Style({
  fill: new Fill({ color: "rgba(0,128,0,0.2)" }),
  stroke: new Stroke({ color: "green", width: 2 }),
  text: new Text({
    text: `Art Booth`,
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

let northWallArtBooths = [];
coordinates.artStands.northWall.booths.forEach((booth, idx) => {
  const boothFeature = createMapAreaFeature({
    ...langData.artStands.northWall.booths[idx],
    coords: booth,
    areaType: "booth",
    staticStyle: boothStaticStyle,
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
  const boothFeature = createMapAreaFeature({
    ...langData.artStands.southWall.booths[idx],
    coords: booth,
    areaType: "booth",
    staticStyle: boothStaticStyle,
  });
  boothFeature.set("areaType", "child");
  southWallArtBooths.push(boothFeature);
});

export const artStands = [
  northWallAreaFeature,
  ...northWallArtBooths,
  ...southWallArtBoothAreas,
  ...southWallArtBooths,
];

export const generalStands = [
  createMapAreaFeature({
    ...langData.infoStand,
    coords: coordinates.infoStand,
    areaType: "booth",
  }),
  createMapAreaFeature({
    ...langData.selfieHunt,
    coords: coordinates.selfieHunt,
    areaType: "booth",
  }),
  createMapAreaFeature({
    ...langData.hexcon,
    coords: coordinates.hexcon,
    areaType: "booth",
  }),
  createMapAreaFeature({
    ...langData.toruship,
    coords: coordinates.toruship,
    areaType: "booth",
  }),
  createMapAreaFeature({
    ...langData.medic,
    coords: coordinates.medic,
    areaType: "booth",
  }),
  createMapAreaFeature({
    ...langData.cosplayHelp,
    coords: coordinates.cosplayHelp,
    areaType: "booth",
  }),
  createMapAreaFeature({
    ...langData.tickets,
    coords: coordinates.tickets,
    areaType: "booth",
  }),
];
