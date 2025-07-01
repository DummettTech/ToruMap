import { createMapAreaFeature } from "../lib/helpers.js";

//#region Coordinates
//top left, bottom left, bottom right, bottom right
const coordinates = {
  polaris: [
    [1256, 675],
    [1143, 510],
    [1308, 395],
    [1419, 559],
  ],
  vega: [
    [1693, 440],
    [1539, 222],
    [1711, 110],
    [1857, 323],
  ],
  sirius: [
    [1463, 598],
    [1314, 388],
    [1472, 280],
    [1619, 491],
  ],
  toilets: [
    [961, 954],
    [812, 743],
    [1054, 573],
    [1171, 740],
    [1181, 733],
    [1212, 778],
    [961, 954],
  ],
  arcade: [
    [2376, 401],
    [2376, 66],
    [2633, 66],
    [2633, 401],
  ],
  cosmo: [
    [2112, 1272],
    [2110, 517],
    [2981, 514],
    [2981, 1270],
  ],
  otherCosmo: [
    [2110, 1681],
    [2111, 1340],
    [2546, 1339],
    [2546, 1679],
  ],
  auroraB: [
    [2636, 402],
    [2636, 67],
    [2883, 67],
    [2883, 400],
  ],
  auroraC: [
    [2886, 402],
    [2887, 67],
    [3143, 68],
    [3143, 399],
  ],
};
//#endregion

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
    name: "Sirius\nD&D & Warhammer",
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
    name: "Cosmo\nMain Area",
    coords: coordinates.cosmo,
    popup: `Main area for events and activities!`,
    areaType: "room",
  }),
  createMapAreaFeature({
    name: "Cosmo\nOther Area",
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
