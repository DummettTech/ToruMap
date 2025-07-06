import day1Eng from "../data/translations/day1/eng.js";
import day1No from "../data/translations/day1/no.js";
import day2Eng from "../data/translations/day2/eng.js";
import day2No from "../data/translations/day2/no.js";

function getCurrentLang() {
  //const switchUrl = "ToruMap";
  const switchUrl = "en.torucon.no";
  const defaultLang = "no";
  const url =
    window.location != window.parent.location
      ? document.referrer
      : document.location.href;
  if (url && url.includes(switchUrl)) {
    return "en";
  } else return defaultLang;
}

// TODO: move out to lang helper
export function getCurrentTranslationData() {
  const currentLang = getCurrentLang();
  console.log(currentLang);
  // get current date/time, translate to day1|day2
  // const currentLang = getCurrentLang();
  switch (currentLang) {
    case "en":
      // if (day2) return day2Eng;
      return day1Eng;
    case "no":
      // if (day2) return day2no;
      console.log(day1No);
      return day1No;
  }
}

/**
 * Format popup text, made for use with booths
 * @param {{name?: Text, blerb?: Text, socials?: {platform: "Nettside" | "Website" | "Instagram" | "TikTok" | "Tumblr" | "Twitter" | "Bluesky" | "Facebook" | "webtoon" | "Spotify" | "Tapas" | "Twitch" | "Etsy", name: Text, link: Text}[]}} popUpTextObj - The OpenLayers map instance.
 */
export function formatBoothPopupText(popUpTextObj) {
  //TODO: rework to output the full object so name doesn't need to be typed twice
  //TODO: add string lit for platform for ease
  //TODO: add translation solution so booths don't need to be day1/day2
  //NOTE: could auto solve for platform by checking the url

  let popUpText = "";
  if (popUpTextObj.name) {
    popUpText += `<strong>${popUpTextObj.name}</strong><br>`;
  }
  if (popUpTextObj.blerb) {
    popUpText += `<p>${popUpTextObj.blerb}</p><br>`;
  }
  if (popUpTextObj.socials && popUpTextObj.socials.length != 0) {
    popUpTextObj.socials.forEach((social) => {
      if (!social.link || !social.name || !social.platform) {
        throw new Error(
          `Missing Data for Social Object: ${social.link} | ${social.name} | ${social.platform}`
        );
      }
      popUpText += `<a>${social.platform}: </a><a href=${social.link} target="_blank">${social.name}</a><br>`;
    });
  }
  return popUpText;
}
