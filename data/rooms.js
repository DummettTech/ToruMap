import { createMapAreaFeature } from "../lib/helpers.js";
import coordinates from "./coordinates/rooms.js";

export const rooms = [
  createMapAreaFeature({
    name: "Vega\nWorkshop and Quiz",
    coords: coordinates.vega,
    popup: `TimeTable:<br>
      Workshop: 10:00-12:00<br>
      Quiz: 12:00-13:00<br>`,
    areaType: "stage",
  }),
  createMapAreaFeature({
    name: () => {
      return `Sirius\nD&D & Warhammer\n${new Date().toLocaleTimeString()}`;
    },
    coords: coordinates.sirius,
    areaType: "clear",
    popup: `TimeTable:<br>
      D&D: 10:00-12:00<br>
      Warhammer: 12:00-13:00<br>`,
  }),
  createMapAreaFeature({
    name: "Polaris\nCool Room",
    coords: coordinates.polaris,
    areaType: "stage",
    popup: `Area to chill out and relax!`,
  }),
  createMapAreaFeature({
    name: "Toilets",
    coords: coordinates.toilets,
    areaType: "clear",
  }),
  createMapAreaFeature({
    name: "Arcade & Breach Demo",
    coords: coordinates.arcade,
    popup: `Enjoy the arcade games!<br>
            A place for gamers to have fun!`,
    areaType: "stage",
  }),
  createMapAreaFeature({
    name: "Stage\nCurrent Event {eventName} \n Next Event {nextEvent}",
    coords: coordinates.cosmo,
    popup: `Main area for events and activities!`,
    areaType: "stage",
  }),
  createMapAreaFeature({
    name: "Cosmos C",
    coords: coordinates.otherCosmo,
    popup: `Another area for events and activities!`,
    areaType: "clear",
  }),
  createMapAreaFeature({
    name: "Aurora B",
    coords: coordinates.auroraB,
    areaType: "clear",
  }),
  createMapAreaFeature({
    name: "Aurora C",
    coords: coordinates.auroraC,
    areaType: "clear",
  }),
];
