import "./style.css";
import { Map, View } from "ol";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";

const imageHeight = 1938;
const imageWidth = 3206;
const imageExtent = [0, 0, imageWidth, imageHeight];
const minZoom = 1;
const maxResolution = Math.max(imageWidth, imageHeight) / 8;
const minResolution = 1;
const maxZoom = Math.ceil(Math.log2(maxResolution / minResolution));
const resolutions = Array.from(
  { length: maxZoom + 1 },
  (_, z) => maxResolution / Math.pow(2, z)
);

const view = new View({
  minZoom: minZoom,
  maxZoom: maxZoom,
  extent: imageExtent,
  center: [imageWidth, imageHeight / 4],
  resolutions: resolutions,
  zoom: 1,
});
const map = new Map({
  target: "map",
  layers: [
    new ImageLayer({
      source: new Static({
        url: "blank_map.jpg",
        imageExtent: imageExtent,
      }),
    }),
  ],
  view: view,
});
