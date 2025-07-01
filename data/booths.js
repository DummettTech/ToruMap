import { createNewMapArea } from "../lib/helpers.js";

const coordinate = {
  artStands: {
    northWall: [
      [834, 1263],
      [837, 1234],
      [1732, 1383],
      [1725, 1414],
    ],
  },
};

export const artStands = [
  createNewMapArea({
    name: "Art Stands",
    coords: coordinate.artStands.northWall,
    popup: `TimeTable:<br>
        10:00-12:00<br>
        12:00-14:00<br>
        14:00-16:00<br>`,
    areaType: "booth",
  }),
];
