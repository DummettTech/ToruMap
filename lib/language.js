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
