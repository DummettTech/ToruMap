import { createNewMapArea } from "../lib/helpers.js";

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
};
//#endregion

export const vega = createNewMapArea({
  name: "Vega\nWorkshop and Quiz",
  coords: coordinates.vega,
  popup: `TimeTable:<br>
      Workshop: 10:00-12:00<br>
      Quiz: 12:00-13:00<br>`,
  areaType: "booth",
});

export const sirius = createNewMapArea({
  name: "Sirius\nD&D & Warhammer",
  coords: coordinates.sirius,
  areaType: "booth",
  popup: `TimeTable:<br>
      D&D: 10:00-12:00<br>
      Warhammer: 12:00-13:00<br>`,
});

export const polaris = createNewMapArea({
  name: "Polaris\nCool Room",
  coords: coordinates.polaris,
  areaType: "cool",
  popup: `Area to chill out and relax!`,
});

export const toilets = createNewMapArea({
  name: "Toilets",
  coords: coordinates.toilets,
  areaType: "cool",
  popup: `Toilets are located here!<br>`,
});
