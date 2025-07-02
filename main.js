import "./style.css";
import {
  handleAreaPopups,
  positionDrawer,
  createAreaVectorSource,
  createAreaVectorLayer,
  handleAreaShowHide,
  getMap,
} from "./lib/helpers";
import { mapAreas } from "./lib/mapFeatures";

const { map } = getMap();

const areaVectorSource = createAreaVectorSource(mapAreas);
const areaVectorLayer = createAreaVectorLayer(areaVectorSource);

map.addLayer(areaVectorLayer);

handleAreaPopups(map, mapAreas);
positionDrawer(map);
handleAreaShowHide(map, mapAreas);

// TODO: move styles update on zoom to helper
map.getView().on("change:resolution", () => {
  areaVectorSource.changed();
});

setInterval(() => {
  mapAreas.forEach((feature) => {
    const popupFn = feature.get("popupFn");
    if (popupFn) feature.set("popup", popupFn());
    const nameFn = feature.get("nameFn");
    if (nameFn) feature.set("name", nameFn());
  });
  areaVectorSource.changed();
}, 1000);
