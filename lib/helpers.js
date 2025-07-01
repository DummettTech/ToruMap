import "../style.css";
import { Feature } from "ol";
import { Polygon } from "ol/geom";
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

export const convertMapAreas = (mapAreas) => {
  return mapAreas.map((area) => {
    const feature = new Feature({ geometry: new Polygon([area.coords]) });
    feature.setStyle(
      new Style({
        fill: new Fill({ color: area.fill }),
        stroke: new Stroke({ color: area.stroke, width: 2 }),
        text: new Text({
          text: area.name,
          font: "bold 18px sans-serif",
          fill: new Fill({ color: "#222" }),
          stroke: new Stroke({ color: "#fff", width: 3 }),
          overflow: true,
        }),
      })
    );
    feature.set("popup", area.popup);
    return feature;
  });
};

/**
 *
 * @param {Object} params
 * @param {string} params.name - Name of the area
 * @param {Array<[number, number]>} params.coords - Array of coordinates; if 4 are passed, it will be treated as a rectangle
 * @param {string | {eng: string, no: string}} params.popup - Content for the popup
 * @param {'booth' | 'room' | 'cool'} params.areaType - Type of area for styling
 * @returns {Object} Area definition object
 */
export const createNewMapArea = ({ name, coords, popup, areaType }) => {
  if (!name || !coords || coords.length < 3) {
    throw new Error("Invalid parameters for creating a new map area");
  }

  // closing the rectangle
  // else assuming they know what they are doing
  if (coords.length === 4) {
    coords.push(coords[0]);
  }

  // cleanup popup
  if (popup && typeof popup === "string") {
    popup = {
      eng: popup,
      no: popup,
    };
  } else if (pop && !popup.eng && popup.no) {
    popup.eng = popup.no;
  } else {
    throw new Error(
      "Invalid popup content, needs to be a string or an object with at least the 'no' property"
    );
  }

  let fill;
  let stroke;
  // TODO: rework to have use colour enums
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
      stroke = "blue";
      fill = "rgba(0,0,255,0.2)";
      break;
    default:
      // TODO: rework to have a default area type
      throw new Error(`Invalid area type specified: ${areaType}`);
  }

  return {
    name: name,
    coords: coords,
    popup: `<strong>${name}</strong><br>${popup.eng}`,
    fill: fill,
    stroke: stroke,
  };
};
