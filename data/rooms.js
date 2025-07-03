import { createMapAreaFeature } from "../lib/helpers.js";
import coordinates from './coordinates/rooms.js'

export const rooms = [
  createMapAreaFeature({
    name: "Vega\nWorkshop and Quiz",
    coords: coordinates.vega,
    popup: `TimeTable:<br>
      Workshop: 10:00-12:00<br>
      Quiz: 12:00-13:00<br>`,
    areaType: "booth",
  }),
  createMapAreaFeature({
    name: () => {
      return `Sirius\nD&D & Warhammer\n${new Date().toLocaleTimeString()}`;
    },
    coords: coordinates.sirius,
    areaType: "booth",
    popup: `TimeTable:<br>
      D&D: 10:00-12:00<br>
      Warhammer: 12:00-13:00<br>`,
  }),
  createMapAreaFeature({
    name: "Polaris\nCool Room",
    coords: coordinates.polaris,
    areaType: "cool",
    popup: `Area to chill out and relax!`,
  }),
  createMapAreaFeature({
    name: "Toilets",
    coords: coordinates.toilets,
    areaType: "cool",
    popup: `Toilets are located here!<br>`,
  }),
  createMapAreaFeature({
    name: "Arcade",
    coords: coordinates.arcade,
    popup: `Enjoy the arcade games!<br>
            A place for gamers to have fun!`,
    areaType: "room",
  }),
  createMapAreaFeature({
    name: "Cosmos AB",
    coords: coordinates.cosmo,
    popup: `Main area for events and activities!`,
    areaType: "room",
  }),
  createMapAreaFeature({
    name: "Cosmos C",
    coords: coordinates.otherCosmo,
    popup: `Another area for events and activities!`,
    areaType: "room",
  }),
  createMapAreaFeature({
    name: "Aurora B",
    coords: coordinates.auroraB,
    popup: `Aurora B area for events!`,
    areaType: "room",
  }),
  createMapAreaFeature({
    name: "Aurora C",
    coords: coordinates.auroraC,
    popup: `Aurora C area for events!`,
    areaType: "room",
  }),
];
