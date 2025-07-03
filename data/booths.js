import { createMapAreaFeature } from "../lib/helpers.js";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Text from "ol/style/Text";
import coordinates from './coordinates/booths.js';

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
    name: `Art Booth ${idx + 1}`,
    coords: booth,
    popup: () => `Current time: ${new Date().toLocaleTimeString()}<br>`,
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
    name: `Art Booth ${idx + 1}`,
    coords: booth,
    popup: () => `Current time: ${new Date().toLocaleTimeString()}<br>`,
    areaType: "booth",
    staticStyle: boothStaticStyle,
  });
  boothFeature.set("areaType", "child");
  southWallArtBooths.push(boothFeature);
});

export const artStands = [northWallAreaFeature, ...northWallArtBooths, ...southWallArtBoothAreas, ...southWallArtBooths];

export const generalStands = [
  createMapAreaFeature({
    name: "Info Stand",
    coords: coordinates.infoStand,
    popup: "Come here for information about the event, schedule, and more!",
    areaType: "booth",
  }),
  createMapAreaFeature({
    name: "Selfie Hunt",
    coords: coordinates.selfieHunt,
    popup: `Participate in the selfie hunt!<br>
            Find all the locations and take selfies with the clues!`,
    areaType: "booth",
  }),
  createMapAreaFeature({
    name: "HexCon",
    coords: coordinates.hexcon,
    popup: `Join us at HexCon!<br>
            A place for all things tabletop gaming!`,
    areaType: "booth",
  }),
  createMapAreaFeature({
    name: "ToruShip",
    coords: coordinates.toruship,
    popup: `Explore the ToruShip!<br>
            A unique experience for all attendees!`,
    areaType: "booth",
  }),
  createMapAreaFeature({
    name: "Medic",
    coords: coordinates.medic,
    popup: `Medical assistance available here!<br>
                For any health-related issues during the event.`,
    areaType: "booth",
  }),
  createMapAreaFeature({
    name: "Cosplay Help",
    coords: coordinates.cosplayHelp,
    popup: `Need help with your cosplay? Come here!<br>`,
    areaType: "booth",
  }),
  createMapAreaFeature({
    name: "Tickets",
    coords: coordinates.tickets,
    popup: `Get your tickets here!<br>
            Don't miss out on the fun!`,
    areaType: "booth",
  }),
];
