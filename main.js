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
    const nameFn = feature.get("nameFn");
    if (nameFn) {
      const nameVal = nameFn();
      feature.set(
        "name",
        typeof nameVal === "string" ? nameVal.replace(/<[^>]+>/g, "") : nameVal
      );
      feature.set("nameHtml", nameVal);
    }
    const popupFn = feature.get("popupFn");
    if (popupFn) feature.set("popup", popupFn());
  });
  areaVectorSource.changed();
}, 3000);
