import "../style.css";
import { Feature } from "ol";
import { Polygon } from "ol/geom";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import Text from "ol/style/Text";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import colours from "../data/colours";
import { Map, View } from "ol";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";

// TODO: breakup helpers into sub-modules
// TODO: rework all to use CSS classes
const IS_DEBUG = false;

export const positionDrawer = (map) => {
  if (import.meta.env && import.meta.env.DEV) {
    const coordsDiv = document.createElement("div", { id: "mouse-coords" });
    coordsDiv.style.position = "absolute";
    coordsDiv.style.bottom = "10px";
    coordsDiv.style.left = "10px";
    coordsDiv.style.background = "rgba(255,255,255,0.8)";
    coordsDiv.style.padding = "4px 8px";
    coordsDiv.style.borderRadius = "4px";
    coordsDiv.style.fontFamily = "monospace";
    document.body.appendChild(coordsDiv);

    map.on("click", function (evt) {
      const coords = map.getEventCoordinate(evt.originalEvent);
      if (coords) {
        coordsDiv.textContent = `${coords[0].toFixed(0)}, ${coords[1].toFixed(
          0
        )}`;
        navigator.clipboard.writeText(`[${coordsDiv.textContent}]`);
      }
    });
  }
};

export const handleAreaPopups = (map, areaFeatures) => {
  const areaPopup = document.createElement("div");
  areaPopup.style.position = "absolute";
  areaPopup.style.pointerEvents = "auto";
  areaPopup.style.background = "rgba(255,255,255,0.98)";
  areaPopup.style.border = "1px solid #888";
  areaPopup.style.padding = "8px 16px";
  areaPopup.style.borderRadius = "6px";
  areaPopup.style.fontFamily = "sans-serif";
  areaPopup.style.fontSize = "16px";
  areaPopup.style.display = "none";
  areaPopup.style.zIndex = "1000";
  areaPopup.style.whiteSpace = "pre-line";

  document.body.appendChild(areaPopup);
  map.on("singleclick", function (evt) {
    const pixel = map.getEventPixel(evt.originalEvent);
    const feature = map.forEachFeatureAtPixel(pixel, (f) =>
      areaFeatures.includes(f) ? f : null
    );

    if (feature) {
      const popup = feature.get("popup");
      if (!popup) {
        return;
      }
      areaPopup.innerHTML = popup;
      areaPopup.style.display = "block";
      areaPopup.style.left = evt.originalEvent.clientX + 10 + "px";
      areaPopup.style.top = evt.originalEvent.clientY + 10 + "px";
    } else {
      areaPopup.style.display = "none";
    }
  });

  map.on("movestart", function () {
    areaPopup.style.display = "none";
  });
};

/**
 * Create a styled OpenLayers Feature for a map area.
 * @param {Object} params
 * @param {function | string} params.name
 * @param {Array<[number, number]>} params.coords
 * @param {function | string | undefined} params.popup
 * @param {'booth' | 'room' | 'cool'} params.areaType
 * @param {function|undefined} params.styleFn - Optional style function for zoom/size logic
 * @returns {Feature}
 */
export function createMapAreaFeature({
  name,
  coords,
  popup,
  areaType,
  styleFn,
  staticStyle,
}) {
  if (!name || !coords || coords.length < 3) {
    throw new Error("Invalid parameters for creating a new map area");
  }
  if (coords.length === 4) coords.push(coords[0]);
  // Support popup as a function for dynamic content
  // TODO: remove as legacy, all names & popups should be a fn
  let popupFn = null;
  if (typeof popup === "function") {
    popupFn = popup;
    popup = popup(); // Call once for initial value
  }

  let nameFn = null;
  if (typeof name === "function") {
    nameFn = name;
    name = name(); // Call once for initial value
  }

  if (!Object.keys(colours).includes(areaType)) {
    throw new Error(
      `Invalid areaType: ${areaType}. Must be one of ${Object.keys(
        colours
      ).join(", ")}`
    );
  }

  let { fill, stroke } = { ...colours[areaType] };

  const feature = new Feature({ geometry: new Polygon([coords]) });

  if (popup) {
    feature.set("popup", popup);
  }

  feature.set("name", name);
  feature.set("fill", fill);
  feature.set("stroke", stroke);

  // Store popupFn for later updates
  if (popupFn) feature.set("popupFn", popupFn);
  if (nameFn) feature.set("nameFn", nameFn);

  // Default style function: auto-hide if too small
  const xs = coords.map(([x]) => x);
  const ys = coords.map(([, y]) => y);
  const width = Math.max(...xs) - Math.min(...xs);
  const height = Math.max(...ys) - Math.min(...ys);

  const defaultStyleFn = function (feature, resolution) {
    const pixelWidth = width / resolution;
    const pixelHeight = height / resolution;
    const minPixelSize = 20;
    if (pixelWidth < minPixelSize || pixelHeight < minPixelSize) return null;
    return new Style({
      fill: new Fill({ color: fill }),
      stroke: new Stroke({ color: stroke, width: 2 }),
      text: new Text({
        text: feature.get("name") || name, // <-- use feature argument
        font: "18px sans-serif",
        fill: new Fill({ color: "#222" }),
        stroke: new Stroke({ color: "#fff", width: 3 }),
        overflow: true,
      }),
    });
  };

  // Use static style if provided, otherwise use styleFn or defaultStyleFn
  if (staticStyle) {
    feature.setStyle(staticStyle);
  } else {
    feature.setStyle(styleFn || defaultStyleFn);
  }
  return feature;
}

/**
 * Create a VectorSource from features.
 * @param {Feature[]} features
 * @returns {VectorSource}
 */
export function createAreaVectorSource(features) {
  return new VectorSource({ features });
}

/**
 * Create a VectorLayer from a VectorSource.
 * @param {VectorSource} source
 * @returns {VectorLayer}
 */
export function createAreaVectorLayer(source) {
  return new VectorLayer({ source, declutter: true });
}

/**
 * Get the current zoom from a map instance.
 * @param {Map} map
 * @returns {number}
 */
export function getZoom(map) {
  return map.getView().getZoom();
}

/**
 * Handle showing/hiding area features based on zoom level.
 * @param {Map} map - The OpenLayers map instance.
 * @param {Feature[]} areaFeatures - Array of area features to manage visibility.
 * This function sets up an event listener on the map to show or hide area features
 */
export function handleAreaShowHide(map, areaFeatures) {
  map.on("moveend", () => {
    const zoom = getZoom(map);
    const zoomThreshold = 1.8;
    areaFeatures.forEach((feature) => {
      if (feature.get("areaType")) {
        if (!feature.get("originalStyle")) {
          // Store the original style if not already set
          feature.set("originalStyle", feature.getStyle());
        }
        if (feature.get("areaType") === "parent") {
          feature.setStyle(() =>
            zoom < zoomThreshold ? feature.get("originalStyle") : null
          );
        }
        if (feature.get("areaType") === "child") {
          feature.setStyle(() =>
            zoom >= zoomThreshold ? feature.get("originalStyle") : null
          );
        }
      }
    });
  });
}

export function getMap() {
  const mapString = IS_DEBUG ? "map_plan2.jpg" : "blank_map.jpg";
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
    enableRotation: false,
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

  return { map, view };
}
