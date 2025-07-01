import "./style.css";
import { Map, View } from "ol";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import {
  handleAreaPopups,
  positionDrawer,
  createAreaVectorSource,
  createAreaVectorLayer,
  getZoom,
  handleAreaShowHide,
} from "./lib/helpers";
import { mapAreas } from "./lib/mapFeatures";

const mapString = true ? "blank_map.jpg" : "map_plan.jpg";
const mapDiv = document.getElementById("map");
const mapWidth = mapDiv ? mapDiv.clientWidth : window.innerWidth;
const mapHeight = mapDiv ? mapDiv.clientHeight : window.innerHeight;

// TODO: rework to get image dimensions dynamically
const imageHeight = 1938;
const imageWidth = 3206;

const resolutionX = imageWidth / mapWidth;
const resolutionY = imageHeight / mapHeight;
const maxZoom = Math.ceil(Math.log2(Math.max(resolutionX, resolutionY) / 1));

const view = new View({
  minZoom: 0,
  maxZoom: maxZoom,
  extent: [-500, -500, imageWidth + 500, imageHeight + 500],
  center: [imageWidth / 2, imageHeight / 2],
  maxResolution: 2,
  minResolution: 0.25,
  zoom: 0,
});

const map = new Map({
  target: "map",
  layers: [
    new ImageLayer({
      source: new Static({
        url: mapString,
        imageExtent: [0, 0, imageWidth, imageHeight],
      }),
    }),
  ],
  view: view,
});

const areaVectorSource = createAreaVectorSource(mapAreas);
const areaVectorLayer = createAreaVectorLayer(areaVectorSource);
map.addLayer(areaVectorLayer);

handleAreaPopups(map, mapAreas);
positionDrawer(map);
handleAreaShowHide(map, mapAreas);

// Ensure styles update on zoom
map.getView().on("change:resolution", () => {
  areaVectorSource.changed();
});
