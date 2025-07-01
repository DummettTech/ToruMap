import "../style.css";
import { Feature } from "ol";
import { Polygon, Point } from "ol/geom";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import Text from "ol/style/Text";

// TODO: rework all to use CSS classes

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
      areaPopup.innerHTML = feature.get("popup");
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
 * @param {string} params.name
 * @param {Array<[number, number]>} params.coords
 * @param {string | {eng: string, no: string}} params.popup
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

  // Normalize popup
  if (typeof popup === "string") {
    popup = { eng: popup, no: popup };
  } else if (!popup.eng && popup.no) {
    popup.eng = popup.no;
  }

  let fill, stroke;
  switch (areaType) {
    case "booth":
      fill = "rgba(0,128,0,0.2)";
      stroke = "green";
      break;
    case "room":
      fill = "rgba(0,0,255,0.2)";
      stroke = "blue";
      break;
    case "cool":
      fill = "rgba(0,0,255,0.2)";
      stroke = "blue";
      break;
    default:
      fill = "rgba(128,128,128,0.2)";
      stroke = "gray";
  }

  const feature = new Feature({ geometry: new Polygon([coords]) });
  feature.set("popup", `<strong>${name}</strong><br>${popup.eng}`);
  feature.set("name", name);
  feature.set("fill", fill);
  feature.set("stroke", stroke);

  // Default style function: auto-hide if too small
  const xs = coords.map(([x]) => x);
  const ys = coords.map(([, y]) => y);
  const width = Math.max(...xs) - Math.min(...xs);
  const height = Math.max(...ys) - Math.min(...ys);

  const defaultStyleFn = function (resolution) {
    const pixelWidth = width / resolution;
    const pixelHeight = height / resolution;
    const minPixelSize = 20;
    if (pixelWidth < minPixelSize || pixelHeight < minPixelSize) return null;
    return new Style({
      fill: new Fill({ color: fill }),
      stroke: new Stroke({ color: stroke, width: 2 }),
      text: new Text({
        text: name,
        font: "bold 18px sans-serif",
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
