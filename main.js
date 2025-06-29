import "./style.css";
import { Map, View } from "ol";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";

const imageHeight = 1938;
const imageWidth = 3206;

const imageExtent = [0, 0, imageWidth, imageHeight];

// Calculate resolutions for zoom levels
const maxZoom = 5;
const minZoom = 1;
const maxResolution = Math.max(imageWidth, imageHeight) / 256;
const resolutions = Array.from(
  { length: maxZoom + 1 },
  (_, z) => maxResolution / Math.pow(2, z)
);

const view = new View({
  minZoom: minZoom,
  maxZoom: maxZoom,
  extent: imageExtent,
  center: [imageWidth / 2, imageHeight / 2],
  resolutions: resolutions,
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

// Fit the view to the image extent so the whole image is visible
view.fit(imageExtent);
